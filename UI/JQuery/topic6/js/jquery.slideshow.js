/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


(function( $ ){

	$.fn.slideshow = function(options){

		return this.each(function(){
			var $img = $(this),
				current = 0;

			// Traversing functions
			
			function show( index ){
				var total = options.images.length;

				while( index < 0 )
					index += total;

				while( index >= total )
					index -= total;

				current = index;
				$img.attr('src', options.images[index]);
				
				if( auto )
					start();
			}

			function prev(){
				show( current - 1 );
			}

			function next(){
				show( current + 1 );
			}
			
			$img.bind('prev', prev).bind('next', next).bind('goto',function(e, index){
				show( index );
			});
			
			// Auto cycling
			
			var auto = false, id;

			function start(){
				stop();
				auto = true;
				id = setTimeout(next, options.interval || 2000);
			}

			function stop(){
				auto = false;
				clearTimeout(id);
			}
			
			$img.bind('start', start).bind('stop', stop);
		});
	};
	
})( jQuery );