/*
 * jQuery Menu
 * Autor: JL Comunicação e Desenvolvimento
 * Version: 1.0
 * Licença CC - Creative Commons - Permitido alterar e compartilhar este código,
 * Solicito que cópias e alterações sejam informandas pelo e-mail: contato@jlcomunicacao.com
 */
(function($){

    var sets;

    var methods = {
            show : function ( o ) {
                $(o).addClass("hover").children("ul").addClass("hover").fadeIn(0);
            },
            hide : function ( o ) {
                $(o).removeClass("hover").children("ul").removeClass("hover").fadeOut('fast');
            },
            init : function(opt) { 
                
                        if (typeof sets === 'object') {opt = sets;}
                        sets = $.extend( true, {}, defaults, opt );
                        sets.o = $(this);
                        $(this).find("a").click(function() {
                            if ($(this).parent().find('li').length > 0) {return false;}
                        });
                        $(this).children('li').each(function(){
                            if (sets.act == "click") {
                                $(this).toggle(
                                    function() {$.fn.jlmenu('show',this);},
                                    function(){$.fn.jlmenu('hide',this);}
                                );
                            }
                            else {
                                $(this).hover(
                                    function() {$.fn.jlmenu('show',this);},
                                    function(){$.fn.jlmenu('hide',this);}
                                );
                            }
                        });
            }
    }
    $.fn.jlmenu = function( method ) {
        if ( methods[method] ) {return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {return methods.init.apply( this, arguments );
        } else {$.error( 'Method ' +  method + ' does not exist on jQuery.jlscroll' );}    
    };

    var defaults = {
        act: 'hover'
    };

})(jQuery);

/*
 * jQuery Hover Plugin 
 * Autor: JL Comunicação e Desenvolvimento
 * Version: 1.0
 * Licença CC - Creative Commons - Permitido alterar e compartilhar este código,
 * Solicito que cópias e alterações sejam informandas pelo e-mail: contato@jlcomunicacao.com
 * Uso:
 *      Tanto em background-image quanto <img>
 *      bakcground-image: captará o tamanho do elemento e deslocará a imagem para cima ou baixo.
 *     <img>: alterará a imagem para IMG_hover, IMG_click ou IMG
 */

jquery_hover = {

	init: function(){
                $('.jhover').on('mouseenter mouseout', function(event) {
                    if ($(this).attr('src')) { $(this).attr('src',jquery_hover.Change($(this).attr('src'),event.type));  }
                    else {$(this).css('background-position',jquery_hover.ChangePos(this,event.type));}
                });
                $('.jclick').on('mousedown mouseup', function(event) {
                    if ($(this).attr('src')) {$(this).attr('src',jquery_hover.Change($(this).attr('src'),event.type,true));}
                    else {$(this).css('background-position',jquery_hover.ChangePos(this,event.type,'click'));}
                });
                $('.jhclick').on('mousedown mouseup mouseenter mouseout', function(event) {
                    if ($(this).attr('src')) {$(this).attr('src',jquery_hover.Change($(this).attr('src'),event.type));}
                    else {$(this).css('background-position',jquery_hover.ChangePos(this,event.type));}
                });
        },

        Change: function(src,act,retorna)
        {
            switch (act) {
                case 'mouseenter':
                    ext         = src.substring(src.lastIndexOf(".")).toLowerCase();newImg      = src.replace(ext,'');
                    return newImg + '_hover' + ext;
                    break;
                case 'mouseout':
                    src.replace('_hover', '');src.replace('_click', '');
                    return src.replace('_hover', '');
                    break;
                case 'mousedown':
                    return src.replace('_hover', '_click');
                    break;
                case 'mouseup':
                    if (retorna == true) {retorna = '';} else {retorna = '_hover';}
                    return src.replace('_click', retorna);
                    break;
                default:
                    break;
            }

        },
        ChangePos: function(el,act,event)
        {
            h = $(el).height();
            switch (act) {
                case 'mouseenter':return '0px -'+(h)+'px';break;
                case 'mouseout':return '0px 0px';break;
                case 'mousedown':if (event=='click') {h = h/2;}return '0px -'+(h*2)+'px';break;
                case 'mouseup':return '0px 0px';break;
                default:break;
            }

        }
};


/*
 * jQuery Dialog
 * Autor: JL Comunicação e Desenvolvimento
 * Version: 0.1
 * Licença CC - Creative Commons - Permitido alterar e compartilhar este código,
 * Solicito que cópias e alterações sejam informandas pelo e-mail: contato@jlcomunicacao.com
 * Uso:
 *      Exibir ou ocultar elementos dependendo da posição do elemento irmão
 */

(function($){

    var sets;

    var methods = {

            init : function(opt) {
                
                        if (typeof sets === 'object') {opt = sets;}
                        sets = $.extend( true, {}, defaults, opt );
                        if ($(this).length > 0) {
                            sets.item = $(this);
                            $(sets.item).each(function() {
                                $(this).mouseenter(function() {
                                    $(this).find('dd').fadeToggle(sets.o.speedIn);
                                }).mouseleave(function() {
                                    $(this).find('dd').fadeToggle(sets.o.speedOut);
                                });
                            });
                        }

            }
    }
    $.fn.jlsimpledialog= function( method ) {
        if ( methods[method] ) {return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {return methods.init.apply( this, arguments );
        } else {$.error( 'Method ' +  method + ' does not exist on jQuery.jlscroll' );}    
    };

    var defaults = {
        o       : "li",
        speedIn   : 1000,
        speedOut  : 500
        
    };

})(jQuery)