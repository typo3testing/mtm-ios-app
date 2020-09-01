// increase decreas buying quantity
// function increaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number').value = value;
// }

// function decreaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('number').value = value;
// }


$(function () {
    $('.value-button.increase').on('click',function(){
        var $qty=$(this).parent().find('input');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.value-button.decrease').on('click',function(){
        var $qty=$(this).parent().find('input');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
});


jQuery(document).ready(function(){


function isAppleDevice(){
return (
(navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
);
}
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
var appStoreURL = "";
if(isAndroid > -1){
jQuery('body').addClass('android-device');
jQuery('html').addClass('android-device');
}
else if( isAppleDevice() ){
jQuery('body').addClass('ios-device');
jQuery('html').addClass('ios-device');

  // jQuery( window ).on( "orientationchange", function( event ) {
  //   location.reload();
  // });


}





//Check Mobile Devices
var checkMobile = function(){

    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if ( isTouch ) {

        jQuery('body').addClass('touch');

        

    }
    else {

        jQuery('body').addClass('no-touch');

    };

};

//Execute Check
checkMobile();


// cart accordion
jQuery('.accordion-trigger').click(function(){
  jQuery(this).parent().find('.collapsed-area').slideToggle();
  jQuery(this).toggleClass('open');
});


// site button with arrow
jQuery('.site-button').each(function(){
  jQuery(this).wrapInner('<span></span>');
});


// fancy

$('[data-fancybox="news-gal"]').fancybox({
  arrows: false,
   buttons: [
    //"zoom",
    //"share",
    //"slideShow",
    //"fullScreen",
    //"download",
    //"thumbs",
    "close"
  ],
});



// video items carousel
$('.video-items-in-carousel .owl-carousel').owlCarousel({
    loop:false,
    dots:false,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

// teaser carousel
$('.teaser-content-with-carousel .owl-carousel').owlCarousel({
    loop:false,
    dots:true,
    margin:0,
    nav:true,
    items: 1
});

jQuery('.teaser-content-with-carousel').each(function(){

  var OWLSTAGEOUTER = jQuery(this).find('.owl-stage-outer');

  jQuery(this).find('.owl-dots').detach().insertAfter(OWLSTAGEOUTER);


  jQuery(this).find('.owl-dots, .owl-nav').wrapAll('<div class= "custom-controller"><div class="row pull-text-center"><div class="col-md-6 my-col no-top-margin"></div></div></div>')

});


// news teaser carousel
$('.news-teaser-module.with-carousel .owl-carousel').owlCarousel({
    loop:false,
    dots:false,
    margin:0,
    nav:true,
    items: 1
});

// product showcase carousel
$('.product-showcase .owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    margin:0,
    nav:true,
    items: 1
});





// mega menu
jQuery('.mega-menu-nav .primary-menu').click(function(e){


  jQuery('.mega-menu-nav .primary-menu').not(this).removeClass('active');
  jQuery('.mega-menu-nav .primary-menu').not(this).find('.sub-menu').hide();

  jQuery(this).find('.sub-menu').show();
  jQuery(this).addClass('active');
  e.stopPropagation();


  var RELATIVECONTENT = jQuery(this).find('.relative-content').html();
  jQuery(this).parents('.mega-menu-items').find('.mega-menu-content-col .main-wrap').html(RELATIVECONTENT);

});


jQuery('.open-collapse-action-part .main-wrap').click(function(){

  jQuery(this).parents('.menu-part.secondary-part').toggleClass('collapsed');

});


jQuery('.menu-hamberg').click(function(){
  jQuery('.mega-menu').show();
  jQuery('.mega-menu').addClass('slideInRight');
  jQuery('.mega-menu').removeClass('slideOutRight');
});
jQuery('.mega-menu-close span').click(function(){
  jQuery('.mega-menu').removeClass('slideInRight');
  jQuery('.mega-menu').addClass('slideOutRight');
});


// overlay cart
jQuery('.open-overlay-cart').click(function(){
  jQuery('.overlay-cart').addClass('open');
});

jQuery('.cart-overlay-close a').click(function(){
  jQuery('.overlay-cart').removeClass('open');
});


// object notation
var site = {}


site.HeaderHeightFunction = function() {

  var HEADERHEIGHT = jQuery('header.header').height();

  var IFTOPBANNER = jQuery('body').find('.top-banner-module').length;

  if (IFTOPBANNER < 1) {
    jQuery('body').addClass('no-banner-page');
    // jQuery('body').css('padding-top', HEADERHEIGHT + 50);
  }


};


site.HeaderHeightScrollFunction = function() {

   var HEADERHEIGHT = jQuery('header.header').height();

   var BANNERHEIGHT = jQuery('.top-banner-module').height();

   var LESSBANNERHEIGHT = BANNERHEIGHT - 400;

   // smooth anchor
    jQuery('a.smooth-anchor').click(function(){
        jQuery('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - HEADERHEIGHT
        }, 500);
        return false;
    });


    jQuery('.page-content').scroll(function() {
        if ($('.page-content').scrollTop() > 100) {
            $('header.header').addClass('scrolled');
        }
        else {
            $('header.header').removeClass('scrolled');
        }
    });


   if ($('.page-content').scrollTop() > 100) {
            $('header.header').addClass('scrolled');
        }
        else {
            $('header.header').removeClass('scrolled');
        }

};


site.KADERTABSLIDER = function() {
  // kader info tab carousel
  jQuery('.kader-module .info-tab-link-carousel.generic-varient .owl-carousel').owlCarousel({
      loop: false,
      dots: false,
      margin: 50,
      nav: true,
      items: 5
  });

  jQuery('.info-tab-link-carousel.generic-varient .owl-item:first-child').each(function(){
  jQuery(this).addClass('current');
  var KADERTABCONTENT = jQuery(this).find('.carousel-context').html();
  jQuery(this).parents('.detail-player-secondary-info').find('.info-tab-body').html(KADERTABCONTENT);
});

jQuery(document).on( "click", ".info-tab-link-carousel.generic-varient .owl-item", function(e) {
  jQuery(this).addClass('current');
  jQuery(this).parents('.info-tab-link-carousel.generic-varient').find('.owl-item').not(this).removeClass('current');
  var KADERTABCONTENT = jQuery(this).find('.carousel-context').html();
  jQuery(this).parents('.detail-player-secondary-info').find('.info-tab-body').html(KADERTABCONTENT);
  e.stopPropagation();
});

};


site.KADERTABSLIDERVAR1 = function() {
  // kader info tab carousel
  // 
  jQuery('.kader-module .link-tab-varient.var-1 .info-tab-link-carousel .owl-carousel').owlCarousel({
      loop: false,
      dots: false,
      margin: 50,
      nav: true,
      items: 6
  });




   jQuery('.kader-module .link-tab-varient .info-tab-link-carousel .owl-item:first-child').each(function(){
  jQuery(this).addClass('current');
  var KADERTABCONTENT = jQuery(this).find('.carousel-context').html();
  jQuery(this).parents('.detail-player-secondary-info').find('.info-tab-body').html(KADERTABCONTENT);
});

jQuery(document).on( "click", ".kader-module .link-tab-varient .info-tab-link-carousel .owl-item", function(e) {
  jQuery(this).addClass('current');
  jQuery(this).parents('.info-tab-link-carousel').find('.owl-item').not(this).removeClass('current');
  var KADERTABCONTENT = jQuery(this).find('.carousel-context').html();
  jQuery(this).parents('.detail-player-secondary-info').find('.info-tab-body').html(KADERTABCONTENT);
  e.stopPropagation();
});

};


site.KADERTABSLIDERVAR1();

site.HeaderHeightScrollFunction();

site.HeaderHeightFunction();




jQuery(window).resize(function(){

  site.HeaderHeightScrollFunction();
  site.HeaderHeightFunction();


});



jQuery( window ).on( "orientationchange", function( event ) {

   
          
});






// flex slider
jQuery('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
     
        });





// set back

jQuery('.set-back').each(function(){

 var SETBACK = jQuery(this).find('img').attr('src');
  jQuery(this).css('background-image', 'url(' + SETBACK + ')');

});










jQuery('.touch .has-submenu > a').addClass('dual-click');
   
   jQuery(document).on( "click", ".dual-click", function(event) {
        
        jQuery(".dual-click").not(this).removeClass("clicked");
        jQuery(this).toggleClass("clicked");
        if (jQuery(this).hasClass("clicked")) {
            event.preventDefault();
        }
    });


// go top
 jQuery('.go-top').click(function(){
   jQuery('html, body').animate({scrollTop: 0}, 400);
  
});

// vieport checker
$('.view-port-appear').viewportChecker({
classToAdd:'fadeInDown active',    
});



//bottom-bg-content
jQuery('.bottom-bg-content').parents('main').addClass('has-bottom-bg-content');


//custom-accordion-content
jQuery('.custom-accordion-content').each(function(){

  var FIRSTACCORDIONHTML = jQuery(this).find('.accordion-block:first-child').find('.accordion-body').html();

  jQuery(this).find('.accordion-block:first-child').addClass('active');

  jQuery(this).find('.accordion-content-clone-viewer').html(FIRSTACCORDIONHTML);

});

jQuery('.accordion-head').click(function(e){

  var ACCORDIONHTML = jQuery(this).parent().find('.accordion-body').html();

  jQuery(this).parents('.custom-accordion-content').find('.accordion-block').removeClass('active');
  jQuery(this).parent().addClass('active');
  e.stopPropagation();

  jQuery(this).parents('.custom-accordion-content').find('.accordion-content-clone-viewer').html(ACCORDIONHTML);
});


// kader function

jQuery('.kader-thumb').click(function(){
  jQuery(this).parents('.kader-module').find('.kader-thumb').not(this).addClass('inactive-thumb');
  var KADERDETAILCONTENT = jQuery(this).find('.hidden-detail-view').html();
  jQuery(this).parents('.repeat-row').find('.kader-detail-wrap .main-wrap').html(KADERDETAILCONTENT);
  site.KADERTABSLIDER();
});


jQuery('.kader-module .close-detail-view a').removeAttr('href');
jQuery(document).on( "click", ".close-detail-view a", function(event) {
  jQuery(this).parents('.kader-module').find('.kader-thumb').removeClass('inactive-thumb');
  jQuery(this).parents('.kader-module').find('.kader-detail-wrap .main-wrap').html('');
});





// datepickers

jQuery('.news-list-datepicker').datepicker();
jQuery('.custom-inputText-block').click(function(e){

  jQuery(this).find('.site-button').addClass('danger');
  e.stopPropagation();

});
jQuery(document).click(function(){

  if (!$(event.target).closest('.ui-corner-all').length) {
       jQuery('.custom-inputText-block').find('.site-button').removeClass('danger');
    }
});

// search drop doen
jQuery('.search-dropdown-trigger').click(function(){

  jQuery(this).find('.site-button').addClass('danger');

});

jQuery(document).click(function(){

  if (!$(event.target).closest('.dropdown-menu').length) {
       jQuery('.search-dropdown-trigger').find('.site-button').removeClass('danger');
    }
});




// jplist
// jQuery.fn.jplist.settings = {

//     datepickerNewsListItem: function(input, options){

//       options.dateFormat = 'dd.mm.yy'                                 
//       input.datepicker(options);
//     }
                
// };


// $('.news-listing-module').jplist({
//     itemsBox: '.list'
//     ,itemPath: '.list-item'
//     ,panelPath: '.jplist-panel'
//     //,debug: true
// });

// jplist


//blockquote

jQuery('blockquote').each(function(){

  var blockquoteHTML = jQuery(this).find('p').html();

  jQuery(this).html(blockquoteHTML);

});





});








// load
jQuery(window).load(function(){


jQuery('.set-back-onload').each(function(){

 var SETBACK = jQuery(this).find('img').attr('src');
  jQuery(this).css('background-image', 'url(' + SETBACK + ')');

});  

setTimeout(function() {
          jQuery('.mega-menu').hide();
}, 100);
setTimeout(function() {
          jQuery('.mega-menu').addClass('run');
}, 110);
setTimeout(function() {
          jQuery('.main-menu > div').addClass('run');
}, 120);





// match height
  jQuery('.equal-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.element-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.contact-info .excerpt').matchHeight();

  jQuery('.team-member-module .primary-info').matchHeight();


  jQuery('.prouduct-listing-teaser .pruduct-featured-img').matchHeight();
  jQuery('.prouduct-listing-teaser .title').matchHeight();
  jQuery('.prouduct-listing-teaser .price').matchHeight();

  jQuery('.iconic-widget-content .icon').matchHeight();

  jQuery('.cart-table-match-height').matchHeight();




// banner carousel

var $Bannercarousel = $('.banner-carousel');
$Bannercarousel.flickity({
  // options
  contain: true,
  draggable: true,
  wrapAround: false,
  pageDots: true
});


 

$Bannercarousel.on( 'change.flickity', function( event, index ) {
 

  jQuery('.carousel-cell').each(function(e){


    if ($(this).hasClass('is-selected')) {
      jQuery(this).find('video').trigger('play');
   }else{
    jQuery(this).find('video').trigger('pause');
   }



  });



   

});


var siteLoad = {}




siteLoad.BANNERCAROUSELHEIGHT = function() {

  jQuery('.banner-carousel').each(function() {
    jQuery(this).find('.carousel-cell').matchHeight();
  });
    

};   

siteLoad.BANNERCAROUSELHEIGHT();


jQuery(window).resize(function(){

  siteLoad.BANNERCAROUSELHEIGHT();

});



// single owl item
jQuery('.owl-carousel').each(function(){
var OWLITEMLEMGTH = jQuery(this).find('.owl-item').length;

if(OWLITEMLEMGTH < 2){
  jQuery(this).addClass('single-item');
}  

});


});




