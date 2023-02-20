var jQueryLoaderOptions = null;
;
(function($) {
    $.loader = function(option){
        switch(option)
        {
            case 'close':
                if(jQueryLoaderOptions){
                    if($("#"+jQueryLoaderOptions.id)){
                        $("#"+jQueryLoaderOptions.id +", #"+jQueryLoaderOptions.background.id).remove();
                    }
                }
                return;
                break;			
            default:
                var options = $.extend({
                    content:"<div id='preloader'><img src='ajax.gif'/></div>",
                    className:'loader',
                    id:'jquery-loader',
                    height:86,
                    width:110,
                    zIndex:30000,
                    background:{
                        opacity:0.4,
                        id:'jquery-loader-background'
                    }
                }, option);
        }
        jQueryLoaderOptions = options;
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        var bgDiv = $('<div id="'+options.background.id+'"/>');
        bgDiv.css({
            zIndex:options.zIndex,
            position:'absolute',
            top:'0px',
            left:'0px',
            width:maskWidth,
            height:maskHeight,
            opacity:options.background.opacity
        });

        bgDiv.appendTo("body");
        if(jQuery.bgiframe){
            bgDiv.bgiframe();
        }
        var div = $('<div id="'+options.id+'" class="'+options.className+'"></div>');
        div.css({
            zIndex:options.zIndex+1,
            width:options.width,
            height:options.height
        });
        div.appendTo('body');
        div.center();
        $(options.content).appendTo(div);
    };
    $.fn.center = function () {
        this.css("position","absolute");
        this.css("top", ( $(window).height() - this.outerHeight() ) / 2+$(window).scrollTop() + "px");
        this.css("left", ( $(window).width() - this.outerWidth() ) / 2+$(window).scrollLeft() + "px");
        return this;
    }
})(jQuery);