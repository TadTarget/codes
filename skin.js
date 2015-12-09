/* Modifica a skin da Loja para a campanha de black friday 2015 Meu Salão Cosméticos.
 * autor: Tadeu Luis P. Gaudio
 * data: 04/12/2015
 */

(function(){

    jQuery('h1.logo img').css({
      'width': '200px',
      'height': '99px',
      'margin': '14px 0 0 18px'
    });

    /** busca **/
    jQuery('.header-container .header .form-search').css({
        'background': 'url(http://www.meusalao.com.br/media/wysiwyg/bg-busca-natal-2015.png) no-repeat 0 0'
    });

    jQuery('.footer .buscafoot').css('background', 'url(http://www.meusalao.com.br/media/wysiwyg/bg-busca-rodape-natal-2015.png) no-repeat 0 0').find('button.button span').css({
        'text-indent': '-1000em',
        'width': '73px',
        'float': 'left',
        'padding': '0'
        })

    /** sacolinha **/
    jQuery('#topcarro h4 span').css({
        'background':'url(http://www.meusalao.com.br/media/wysiwyg/icone-sacola-natal-2015.png) no-repeat 0 0',
        'font-size': '13px',
        'color': '#04b2ca',
        'font-weight': 'bold'
    })
    jQuery('#topcarro .carrinho_int .quantidade_itens span').css({
        'font-weight': 'bold',
        'font-size': '13px',
        'color': '#411882'
    })

    jQuery('#topcarro .carrinho_int .quantidade_itens span b').css({
        'color': '#411882'
    })

    jQuery('#vertical-nav .block-content span').remove();

    /* menu principal */
    jQuery('.topo-principal-cat-').css('margin-left', '39px');


    jQuery('.header-container .header .form-search button.button').css('width', '76px');
    jQuery('.header-container .header .form-search button.button span').css('visibility', 'hidden');

    jQuery('.secundario').css({
        'background': 'url(http://www.meusalao.com.br/media/wysiwyg/bg-menu-natal-2015.png) no-repeat center',
        'height': '37px'
    });

    jQuery('.fgratis').css({
        'border': '0',
        'padding': '0'
    }).find('img').attr('src', 'http://www.meusalao.com.br/media/wysiwyg/bg-vantagens-meu-salao.png');

    jQuery('#abasdahome .collateral-box #promocao').css('box-shadow', 'none');
    jQuery('.products-grid .product-image').css('border', '0');


    /** destaques **/
    jQuery('#banner_wrapper_top .boxe').css('margin-top', '0');
    jQuery('#banner_wrapper_top .boxe .category-products .head h4').css('background','#00B4CC');
    jQuery('#abasdahome .collateral-box .headers .head-n').css('margin-left', '10px');
    jQuery('.marcas-home h2, .category-products .head').css({
        'background': 'url(http://www.meusalao.com.br/media/wysiwyg/bg-menu-natal-2015.png) no-repeat center',
        'height': '28px',
        'padding': '0',
        'border-radius':'0'
    });

    jQuery('.marcas-carousel h2').css({
        'text-indent': '24px',
        'text-transform': 'uppercase',
        'line-height': '29px'
    })

    jQuery('.category-products .head h4').css({
        'font-size': '16px',
        'text-indent': '24px',
        'text-transform': 'uppercase',
        'font-weight': 'bold',
        'line-height': '29px'
    });


    jQuery('#banner_wrapper_top .boxe .category-products li.item .buttom').css('background', 'url(http://www.meusalao.com.br/media/wysiwyg/icone-mais-destaques-natal-2015.png) no-repeat 0 0');


    jQuery('#topcarro, #topnew .homenews .meio, #topnew .homenews h4').css('background-image', 'none')
    jQuery('#topnew .homenews .meio .button').css({
        'width': '100px',
        'text-indent': '-100em'
    });

    jQuery('#topnew .homenews label').css('text-align', 'left');
    jQuery('#topnew .homenews .meio .input-box .sombra').remove()
    jQuery('#topnew .homenews .meio .input-box input').css('width', '283px')

    jQuery('.marcas-home, .marcas-carousel .button-bg').css('background', 'none');
    jQuery('.marcas-carousel .jcarousel-prev').css({
        'background': 'url(http://www.meusalao.com.br/media/wysiwyg/bg-prev-natal-2015.gif) repeat-x 0 0',
        'left':'0'
        });

    jQuery('.marcas-carousel .jcarousel-next').css({
        'background': 'url(http://www.meusalao.com.br/media/wysiwyg/bg-next-natal-2015.gif) repeat-x 0 0',
        'right': '0'
    });

    jQuery('#topnew .homenews').css({
        'background': 'url(http://www.meusalao.com.br/media/wysiwyg/bg-ofertas-por-email-natal-2015.png) repeat-x 0 0',
        'height': '62px;',
        'border-radius': '0'
    });

    jQuery('#topnew .homenews .meio .actions .button span, .block-layered-nav dt').css({
        'background-color': 'transparent',
        'background-image': 'none'
    })

    jQuery('#abasdahome .collateral-box .headers').css({
        'background': 'url(http://www.meusalao.com.br/media/wysiwyg/bg-menu-natal-2015.png) no-repeat 0 0',
        'height': '32px',
        'padding': '0',
        'width': '980px',
        'border-radius': '0'
    });

    jQuery('#abasdahome .collateral-box #novidade').css({
        'box-shadow': 'none',
        '-webkit-box-shadow': 'none'
    });

    /* página de categoria do produto */
    jQuery('.description .head, .product-view .product-essential .product-img-box .ratings-av,\
     .product-view .product-shop .ccasada .box-cc-titulo, .block-related .block-title, #vertical-nav.block h4.header-categoryes').css('background', 'url(http://www.meusalao.com.br/media/wysiwyg/bg-menu-natal-2015.png) no-repeat 0 0');

    jQuery('#vertical-nav.block h4.header-categoryes').css({
       'background': 'url(http://www.meusalao.com.br/media/wysiwyg/bg-menu-natal-2015.png) repeat 0 0',
       'height' : '24px',
       'border-radius': '0',
       'line-height': '29px'
    });

    /* página do produto */
    jQuery('.product-view .product-shop .description .head, .box-cc-titulo, .block-related .block-title, .product-view .product-essential .product-img-box .ratings-av').css({
        'border-radius': '0',
        'background-repeat': 'repeat'
    })

    /* rodapé */
    jQuery('.footer .esquerda .links, .footer .esquerda .pagamentos, .footer .esquerda .certificado, .footer .direita .midias').css({
        'background-image': 'url(http://www.meusalao.com.br/media/wysiwyg/bg-menu-natal-2015.png)'
    })

    jQuery('.footer .direita .midias').css({
        'border-radius': '0'
    })

    jQuery('.footer .direita span').css('height', '248px');

    jQuery('.footer .separa img').attr('src', 'http://www.meusalao.com.br/media/wysiwyg/bg-menu-natal-2015.png').css({
        'width': '980px',
        'height': '3px'
    });

    jQuery('.footer .esquerda, .footer .direita, .footer .centro').css({
        'background': 'none',
        'border': '0'
    })

    /** UTMS para clique em produtos da página **/
    if(jQuery('body.category-black-friday-2015')[0]){
        jQuery('.products-grid li a').each(function(){
         var t = jQuery(this), url_swap = t.attr('href'),
                utms = '?utm_source=skin_blkf15&utm_medium=paginga&utm_campaing=cyber_monday2015';
                t.attr('href', url_swap+utms);
        })
    }

})()
