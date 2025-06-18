/*
 *  Funções Gerais
 *
 *----------------------------------------------------*/

var addthis_config={data_track_clickback:false};

function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '::' + obj[p] + '<br/>';
        }
    }
    return str;
}
//$(window).load(function(){
    
//    ativarWaterMark = function() {
//        $.watermark.options.useNative = false;
//            $('input').each(function() { $(this).watermark($(this).attr('data-wm'), { className: 'wmactive' } ); } );
//    }
//    ativarWaterMark();
//});
jQuery(document).ready(function() {
    
//    
        $('[data-toggle="collapse"]').click(function(e) {
            e.stopPropagation();
            $(".navbar-collapse").toggleClass('in').css('right','-335px');
            $('.navbar-collapse.in').animate({right : 0});
            
            
//            var $this = $(this);
//
//            var $target = $($this.data('target') || $this.attr('href') || '#navbar');
//            var direction = $this.data('direction') || 'left';
//            
//            $target.addClass('navbar-push').addClass('navbar-push-' + direction);
//            
//            var $canvas = $($this.data('canvas') ||  'body');
//            $canvas.addClass('push-canvas');
//
//            $this.on('click', function(e) {
//                $this.toggleClass('active');
//                if ($this.is('.fa-bars')) {
//                    $this.toggleClass('fa-rotate-90');
//                }
//                $canvas.toggleClass('pushed-' + direction);
//                $target.toggleClass('in');
//            });
        });
//    
//    
//    
    
    $("#ZcNets").children(".zcNet").on('click',function() {
        window.open($(this).attr('href'), '_blank', 'width=400,height=500');return false;
    });
     
    turnLinkSearch = function() {
        $('.link_search').toggle();
        $(".search_box_els").toggle();
    };
    $('.link_search').on("click",function(e) {
        e.preventDefault();
        turnLinkSearch();
        e.stopPropagation();
    });
    $(document).on("click", function(e) {
        if ($(e.target).parents('.search_box').length === 0 ) { if ($(".search_box_els:hidden").length === 0) {  turnLinkSearch(); } }
    });
    $("#menu ul").jlmenu();
    $("#tags ul").jlmenu();
    $('.destaque-pause').on('click',function() {
       $(this).hide();  $('.destaque-resume').show();
    });
    $('.destaque-resume').on('click',function() {
       $(this).hide();  $('.destaque-pause').show();
    });
    if ($("a[rel='ginc']").length > 0 ) {
        $("a[rel='ginc']").colorbox({'maxHeight':'700px', 'maxWidth':'700px'});
    }
    if ($(".giin").length > 0 ) {
        $(".giin").colorbox({'maxHeight':'700px', 'maxWidth':'700px','rel':'nofollow'});
    }
    
    if ($(".galeria-inside-box").length > 0 ) {
        $(".galeria-inside-box").carousel({
                dispItems:3,
                prevBtn: "<div id='carousel-previous' class='carousel-previous'> < </div>",
                nextBtn: "<div id='carousel-next' class='carousel-next'> ></div>"
        });
    }
    $('.cols_footer').html($('.cols_header').html());

    if ($('.videoframe').length > 0) {
        $('.videoframe').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
        });
    }
		
});