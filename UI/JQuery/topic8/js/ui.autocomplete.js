/*
 * jQuery UI Autocomplete @VERSION
 *
 * Copyright (c) 2007, 2008 Dylan Verheul, Dan G. Switzer, Anjesh Tuladhar, Jörn Zaefferer
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	ui.core.js
 */
(function($) {

$.widget("ui.autocomplete", {

	_init: function() {
		// TODO move these to instance properties?
		$.extend(this.options, {
			delay: this.options.delay != undefined ? this.options.delay : (this.options.url? this.options.ajaxDelay : this.options.localDelay),
			max: this.options.max != undefined ? this.options.max : (this.options.scroll? this.options.scrollMax : this.options.noScrollMax),
			highlight: this.options.highlight || function(value) { return value; }, // if highlight is set to false, replace it with a do-nothing function
			formatMatch: this.options.formatMatch || this.options.formatItem // if the formatMatch option is not specified, then use formatItem for backwards compatibility
		});

		var input = this.element[0],
			options = this.options,
			// Create $ object for input element
			$input = $(input).attr("autocomplete", "off").addClass(options.inputClass),
			KEY = $.ui.keyCode,
			previousValue = "",
			cache = $.ui.autocomplete.cache(options),
			hasFocus = 0,
			config = {
				mouseDownOnSelect: false
			},
			timeout,
			blockSubmit,
			lastKeyPressCode,
			select = $.ui.autocomplete.select(options, input, selectCurrent, config);

		if(options.result) {
			$input.bind('result.autocomplete', options.result);
		}

		// prevent form submit in opera when selecting with return key
		$.browser.opera && $(input.form).bind("submit.autocomplete", function() {
			if (blockSubmit) {
				blockSubmit = false;
				return false;
			}
		});

		// only opera doesn't trigger keydown multiple times while pressed, others don't work with keypress at all
		$input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(event) {
			// track last key pressed
			lastKeyPressCode = event.keyCode;
			switch(event.keyCode) {

				case KEY.UP:
					event.preventDefault();
					if ( select.visible() ) {
						select.prev();
					} else {
						onChange(0, true);
					}
					break;

				case KEY.DOWN:
					event.preventDefault();
					if ( select.visible() ) {
						select.next();
					} else {
						onChange(0, true);
					}
					break;

				case KEY.PAGE_UP:
					event.preventDefault();
					if ( select.visible() ) {
						select.pageUp();
					} else {
						onChange(0, true);
					}
					break;

				case KEY.PAGE_DOWN:
					event.preventDefault();
					if ( select.visible() ) {
						select.pageDown();
					} else {
						onChange(0, true);
					}
					break;

				// matches also semicolon
				case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
				case KEY.TAB:
				case KEY.ENTER:
					if( selectCurrent() ) {
						// stop default to prevent a form submit, Opera needs special handling
						event.preventDefault();
						blockSubmit = true;
						return false;
					}
					break;

				case KEY.ESCAPE:
					select.hide();
					break;

				default:
					clearTimeout(timeout);
					timeout = setTimeout(onChange, options.delay);
					break;
			}
		})
		.bind('focus.autocomplete', function(){
			// track whether the field has focus, we shouldn't process any
			// results if the field no longer has focus
			hasFocus++;
		})
		.bind('blur.autocomplete', function() {
			hasFocus = 0;
			if (!config.mouseDownOnSelect) {
				hideResults();
			}
		})
		.bind('click.autocomplete', function() {
			// show select when clicking in a focused field
			if ( hasFocus++ > 1 && !select.visible() ) {
				onChange(0, true);
			}
		}).bind("search.autocomplete", function() {
			// TODO why not just specifying both arguments?
			var fn = (arguments.length > 1) ? arguments[1] : null;
			function findValueCallback(q, data) {
				var result;
				if( data && data.length ) {
					for (var i=0; i < data.length; i++) {
						if( data[i].result.toLowerCase() == q.toLowerCase() ) {
							result = data[i];
							break;
						}
					}
				}
				if( typeof fn == "function" ) fn(result);
				else $input.trigger("result.autocomplete", result && [result.data, result.value]);
			}
			$.each(trimWords($input.val()), function(i, value) {
				request(value, findValueCallback, findValueCallback);
			});
		})
		.bind("flushCache.autocomplete", function() {
			cache.flush();
		})
		.bind("setOptions.autocomplete", function() {
			$.extend(options, arguments[1]);
			// if we've updated the data, repopulate
			if ( "data" in arguments[1] )
				cache.populate();
		})
		.bind("unautocomplete", function() {
			select.unbind();
			//$input.unbind(); << this would unbind all events. Bad news if we've had another plugin applied to this element. AAP 03.12.09
			$(input).unbind(".autocomplete");
			$(input.form).unbind(".autocomplete");
		});

		// Private methods
		function selectCurrent() {
			var selected = select.selected();
			if( !selected ) return false;

			var v = selected.result;
			previousValue = v;

			if ( options.multiple ) {
				var words = trimWords($input.val());
				if ( words.length > 1 ) {
					v = words.slice(0, words.length - 1).join( options.multipleSeparator ) + options.multipleSeparator + v;
				}
				v += options.multipleSeparator;
			}

			$input.val(v);
			hideResultsNow();
			$input.trigger("result.autocomplete", [selected.data, selected.value]);
			return true;
		};

		function onChange(crap, skipPrevCheck) {
			if( lastKeyPressCode == KEY.DELETE ) {
				select.hide();
				return;
			}

			var currentValue = $input.val();

			if ( !skipPrevCheck && currentValue == previousValue )
				return;

			previousValue = currentValue;

			currentValue = lastWord(currentValue);
			if ( currentValue.length >= options.minChars) {
				$input.addClass(options.loadingClass);
				if (!options.matchCase)
					currentValue = currentValue.toLowerCase();
				request(currentValue, receiveData, hideResultsNow);
			} else {
				stopLoading();
				select.hide();
			}
		};

		function trimWords(value) {
			if ( !value ) {
				return [""];
			}
			if ( !options.multiple ) {
				return [value];
			}
			var words = value.split( options.multipleSeparator );
			var result = [];
			$.each(words, function(i, value) {
				if ( $.trim(value) )
					result[i] = $.trim(value);
			});
			return result;
		};

		function lastWord(value) {
			var words = trimWords(value);
			return words[words.length - 1];
		};

		// fills in the input box w/the first match (assumed to be the best match)
		// q: the term entered
		// sValue: the first matching result
		function autoFill(q, sValue){
			// autofill in the complete box w/the first match as long as the user hasn't entered in more data
			// if the last user key pressed was backspace, don't autofill
			if( options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != $.ui.keyCode.BACKSPACE ) {
				// fill in the value (keep the case the user has typed)
				$input.val($input.val() + sValue.substring(lastWord(previousValue).length));
				// select the portion of the value not typed by the user (so the next character will erase)
				$.ui.autocomplete.selection(input, previousValue.length, previousValue.length + sValue.length);
			}
		};

		function hideResults() {
			clearTimeout(timeout);
			timeout = setTimeout(hideResultsNow, 200);
		};

		function hideResultsNow() {
			var wasVisible = select.visible();
			select.hide();
			clearTimeout(timeout);
			stopLoading();
			if (options.mustMatch) {
				// call search and run callback
				$input.autocomplete("search", function (result){
						// if no value found, clear the input box
						if( !result ) {
							if (options.multiple) {
								var words = trimWords($input.val()).slice(0, -1);
								$input.val( words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : "") );
							}
							else
								$input.val( "" );
						}
					}
				);
			}
			if (wasVisible)
				// position cursor at end of input field
				$.ui.autocomplete.selection(input, input.value.length, input.value.length);
		};

		function receiveData(q, data) {
			if ( data && data.length && hasFocus ) {
				stopLoading();
				select.display(data, q);
				autoFill(q, data[0].value);
				select.show();
			} else {
				hideResultsNow();
			}
		};

		function request(term, success, failure) {
			if (!options.matchCase)
				term = term.toLowerCase();
			var data = cache.load(term);
			// recieve the cached data
			if (data && data.length) {
				success(term, data);
			} // if an AJAX url has been supplied, try loading the data now
			else if( (typeof options.url == "string") && (options.url.length > 0) ){

				var extraParams = {
					timestamp: +new Date()
				};
				$.each(options.extraParams, function(key, param) {
					extraParams[key] = typeof param == "function" ? param(term) : param;
				});

				$.ajax({
					// try to leverage ajaxQueue plugin to abort previous requests
					mode: "abort",
					// limit abortion to this input
					port: "autocomplete" + input.name,
					dataType: options.dataType,
					url: options.url,
					data: $.extend({
						q: lastWord(term),
						limit: options.max
					}, extraParams),
					success: function(data) {
						var parsed = options.parse && options.parse(data) || parse(data);
						cache.add(term, parsed);
						success(term, parsed);
					}
				});
			}

			else if (options.source && typeof options.source == 'function') {
				var resultData = options.source(term);
				var parsed = (options.parse) ? options.parse(resultData) : resultData;

				cache.add(term, parsed);
				success(term, parsed);
			} else {
				// if we have a failure, we need to empty the list -- this prevents the the [TAB] key from selecting the last successful match
				select.emptyList();
				failure(term);
			}
		};

		function parse(data) {
			var parsed = [];
			var rows = data.split("\n");
			for (var i=0; i < rows.length; i++) {
				var row = $.trim(rows[i]);
				if (row) {
					row = row.split("|");
					parsed[parsed.length] = {
						data: row,
						value: row[0],
						result: options.formatResult && options.formatResult(row, row[0]) || row[0]
					};
				}
			}
			return parsed;
		};

		function stopLoading() {
			$input.removeClass(options.loadingClass);
		};

	}, //End _init
	
	_propagate: function(n, event) {
		$.ui.plugin.call(this, n, [event, this.ui()]);
		return this.element.triggerHandler(n == 'autocomplete' ? n : 'autocomplete'+n, [event, this.ui()], this.options[n]);
	},

	// Public methods
	ui: function(event) {
		return {
			options: this.options,
			element: this.element
		};
	},
	result: function(handler) {
		return this.element.bind("result.autocomplete", handler);
	},
	search: function(handler) {
		return this.element.trigger("search.autocomplete", [handler]);
	},
	flushCache: function() {
		return this.element.trigger("flushCache.autocomplete");
	},
	setData: function(key, value){
		return this.element.trigger("setOptions.autocomplete", [{ key: value }]);
	},
	destroy: function() {
		this.element
			.removeAttr('disabled')
			.removeClass('ui-autocomplete-input');
		return this.element.trigger("unautocomplete");
	},
	enable: function() {
		this.element
			.removeAttr('disabled')
			.removeClass('ui-autocomplete-disabled');
		this.disabled = false;
	},
	disable: function() {
		this.element
			.attr('disabled', true)
			.addClass('ui-autocomplete-disabled');
		this.disabled = true;
	}
});

$.extend($.ui.autocomplete, {
	defaults: {
		inputClass: "ui-autocomplete-input",
		resultsClass: "ui-widget ui-widget-content ui-autocomplete-results",
		loadingClass: "ui-autocomplete-loading",
		minChars: 1,
		ajaxDelay: 400,
		localDelay: 10,
		matchCase: false,
		matchSubset: true,
		matchContains: false,
		cacheLength: 10,
		scrollMax: 150,
		noScrollMax: 10,
		mustMatch: false,
		extraParams: {},
		selectFirst: true,
		formatItem: function(row) { return row[0]; },
		formatMatch: null,
		autoFill: false,
		width: 0,
		multiple: false,
		multipleSeparator: ", ",
		highlight: function(value, term) {
			return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
		},
		scroll: true,
		scrollHeight: 180
	}
});

$.ui.autocomplete.cache = function(options) {

	var data = {};
	var length = 0;

	function matchSubset(s, sub) {
		if (!options.matchCase)
			s = s.toLowerCase();
		var i = s.indexOf(sub);
		if (i == -1) return false;
		return i == 0 || options.matchContains;
	};

	function add(q, value) {
		if (length > options.cacheLength){
			flush();
		}
		if (!data[q]){ 
			length++;
		}
		data[q] = value;
	}

	function populate(){
		if( !options.data ) return false;
		// track the matches
		var stMatchSets = {},
			nullData = 0;

		// no url was specified, we need to adjust the cache length to make sure it fits the local data store
		if( !options.url ) options.cacheLength = 1;

		// track all options for minChars = 0
		stMatchSets[""] = [];

		// loop through the array and create a lookup structure
		for ( var i = 0, ol = options.data.length; i < ol; i++ ) {
			var rawValue = options.data[i];
			// if rawValue is a string, make an array otherwise just reference the array
			rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;

			var value = options.formatMatch(rawValue, i+1, options.data.length);
			if ( value === false )
				continue;

			var firstChar = value.charAt(0).toLowerCase();
			// if no lookup array for this character exists, look it up now
			if( !stMatchSets[firstChar] )
				stMatchSets[firstChar] = [];

			// if the match is a string
			var row = {
				value: value,
				data: rawValue,
				result: options.formatResult && options.formatResult(rawValue) || value
			};

			// push the current match into the set list
			stMatchSets[firstChar].push(row);

			// keep track of minChars zero items
			if ( nullData++ < options.max ) {
				stMatchSets[""].push(row);
			}
		};

		// add the data items to the cache
		$.each(stMatchSets, function(i, value) {
			// increase the cache size
			options.cacheLength++;
			// add to the cache
			add(i, value);
		});
	}

	// populate any existing data
	setTimeout(populate, 25);

	function flush(){
		data = {};
		length = 0;
	}

	return {
		flush: flush,
		add: add,
		populate: populate,
		load: function(q) {
			if (!options.cacheLength || !length)
				return null;
			/* 
			 * if dealing w/local data and matchContains than we must make sure
			 * to loop through all the data collections looking for matches
			 */
			if( !options.url && options.matchContains ){
				// track all matches
				var csub = [];
				// loop through all the data grids for matches
				for( var k in data ){
					// don't search through the stMatchSets[""] (minChars: 0) cache
					// this prevents duplicates
					if( k.length > 0 ){
						var c = data[k];
						$.each(c, function(i, x) {
							// if we've got a match, add it to the array
							if (matchSubset(x.value, q)) {
								csub.push(x);
							}
						});
					}
				}
				return csub;
			} else 
			// if the exact item exists, use it
			if (data[q]){
				return data[q];
			} else
			if (options.matchSubset) {
				for (var i = q.length - 1; i >= options.minChars; i--) {
					var c = data[q.substr(0, i)];
					if (c) {
						var csub = [];
						$.each(c, function(i, x) {
							if (matchSubset(x.value, q)) {
								csub[csub.length] = x;
							}
						});
						return csub;
					}
				}
			}
			return null;
		}
	};
};

$.ui.autocomplete.select = function (options, input, select, config) {
	var CLASSES = {
		//ACTIVE: "ui-state-active" << From the Css Framework Docs : .ui-state-active: Class to be applied on mousedown to clickable button-like elements.
		//Since this isnt a button element, but a hybrid 'menu item', use a custom class.
		//See: http://jqueryui.pbwiki.com/Menu 2- Visual Design
		DEFAULT: 'ui-autocomplete-state-default',
		ACTIVE: 'ui-autocomplete-state-active'
	};

	var listItems,
		active = -1,
		data,
		term = "",
		needsInit = true,
		element,
		list;

	// Create results
	function init() {
		if (!needsInit) return;
		element = $("<div/>")
		.hide()
		.addClass(options.resultsClass)
		//.css("position", "absolute") set this up in the css in case users want to do something wonky with the positioning.
		.appendTo(document.body);

		list = $("<ul/>").appendTo(element).mouseover( function(event) {
			var e = target(event);
			if(e.nodeName && e.nodeName.toUpperCase() == 'LI') {
				active = $("li", list).removeClass(CLASSES.ACTIVE).index(e);
				$(e).addClass(CLASSES.ACTIVE);
			}
		}).click(function(event) {
			$(target(event)).addClass(CLASSES.ACTIVE);
			select();
			// TODO provide option to avoid setting focus again after selection? useful for cleanup-on-focus
			input.focus();
			return false;
		}).mousedown(function() {
			config.mouseDownOnSelect = true;
		}).mouseup(function() {
			config.mouseDownOnSelect = false;
		});

		if( options.width > 0 )
			element.css("width", options.width);

		needsInit = false;
	} 

	function target(event) {
		var element = event.target;
		while(element && element.tagName != "LI")
			element = element.parentNode;
		// more fun with IE, sometimes event.target is empty, just ignore it then
		if(!element)
			return [];
		return element;
	}

	function moveSelect(step) {
		listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
		movePosition(step);
		var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
		if(options.scroll) {
			var offset = 0;
			listItems.slice(0, active).each(function() {
				offset += this.offsetHeight;
			});
			if((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
				list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
			} else if(offset < list.scrollTop()) {
				list.scrollTop(offset);
			}
		}
	};

	function movePosition(step) {
		active += step;
		if (active < 0) {
			active = listItems.size() - 1;
		} else if (active >= listItems.size()) {
			active = 0;
		}
	}

	function limitNumberOfItems(available) {
		return options.max && options.max < available
			? options.max
			: available;
	}

	function fillList() {
		list.empty();
		var max = limitNumberOfItems(data.length);
		for (var i=0; i < max; i++) {
			if (!data[i])
				continue;
			var formatted = options.formatItem(data[i].data, i+1, max, data[i].value, term);
			if ( formatted === false )
				continue;
			var li = $("<li/>")
				.html( options.highlight(formatted, term) )
				.addClass(i%2 == 0 ? "ui-autocomplete-even" : "ui-autocomplete-odd")
				.addClass(CLASSES.DEFAULT)
				.appendTo(list)[0];
			$.data(li, "ui-autocomplete-data", data[i]);
		}
		listItems = list.find("li");
		if ( options.selectFirst ) {
			listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
			active = 0;
		}
		// apply bgiframe if available
		if ( $.fn.bgiframe )
			list.bgiframe();
	}

	return {
		display: function(d, q) {
			init();
			data = d;
			term = q;
			fillList();
		},
		next: function() {
			moveSelect(1);
		},
		prev: function() {
			moveSelect(-1);
		},
		pageUp: function() {
			if (active != 0 && active - 8 < 0) {
				moveSelect( -active );
			} else {
				moveSelect(-8);
			}
		},
		pageDown: function() {
			if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
				moveSelect( listItems.size() - 1 - active );
			} else {
				moveSelect(8);
			}
		},
		hide: function() {
			element && element.hide();
			listItems && listItems.removeClass(CLASSES.ACTIVE)
			active = -1;
			$(input).triggerHandler("autocompletehide", [{}, { options: options }], options["hide"]);
		},
		visible : function() {
			return element && element.is(":visible");
		},
		current: function() {
			return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
		},
		show: function() {
			var offset = $(input).offset();
			element.css({
				width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
				top: offset.top + input.offsetHeight,
				left: offset.left
			}).show();

			if(options.scroll) {
				list.scrollTop(0);
				list.css({
					maxHeight: options.scrollHeight,
					overflow: 'auto'
				});

				if($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
					var listHeight = 0;
					listItems.each(function() {
						listHeight += this.offsetHeight;
					});
					var scrollbarsVisible = listHeight > options.scrollHeight;
					list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight );
					if (!scrollbarsVisible) {
						// IE doesn't recalculate width when scrollbar disappears
						listItems.width( list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")) );
					}
				}

			}

			$(input).triggerHandler("autocompleteshow", [{}, { options: options }], options["show"]);

		},
		selected: function() {
			var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
			return selected && selected.length && $.data(selected[0], "ui-autocomplete-data");
		},
		emptyList: function (){
			list && list.empty();
		},
		unbind: function() {
			element && element.remove();
		}
	};
};

$.ui.autocomplete.selection = function(field, start, end) {
	if( field.createTextRange ){
		var selRange = field.createTextRange();
		selRange.collapse(true);
		selRange.moveStart("character", start);
		selRange.moveEnd("character", end);
		selRange.select();
	} else if( field.setSelectionRange ){
		field.setSelectionRange(start, end);
	} else {
		if( field.selectionStart ){
			field.selectionStart = start;
			field.selectionEnd = end;
		}
	}
	field.focus();
};

})(jQuery);