import MtmOwlCarousel from '../utility/mtm-owl-carousel.js';
class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7,config){

        f7.preloader.show();

        f7.request({
        url: config.data.url+config.data.url_kader,
        cache: false,
        crossDomain: true,
        dataType: 'json',
        success: function(data,status,xhr){
          // console.log(data);
          $('#kader').html(data);

          MtmOwlCarousel.kaderOwlCarousel('.kader-module .info-tab-link-carousel.generic-varient .owl-carousel');

          jQuery('.trigger-initiate-back-link').click(function(){
            jQuery('.general-component-back-link').addClass('active');
            jQuery('.page-hidden-logo').addClass('inactive');
          });

          jQuery(document).on( "click", ".general-component-back-link", function(event) {
            jQuery('.general-component-back-link').removeClass('active');
            jQuery('.page-hidden-logo').removeClass('inactive');  
          });

          // kader function
          jQuery('.trigger-initiate-back-link').click(function(){
            jQuery(this).parents('.kader-module').find('.kader-thumb').not(this).addClass('inactive-thumb');
          });

          jQuery(document).on( "click", ".general-component-back-link", function(event) {
            jQuery('.kader-module').find('.kader-thumb').removeClass('inactive-thumb');
            jQuery('.kader-detail-wrap .tab.kader-detail-in-tab-body.tab-active').removeClass('tab-active');
          });
          // kader function

          f7.preloader.hide();

        },
        error: function(xhr,status){
          console.log('xhr: '+xhr);
          console.log('status: '+status);
        }
      });

  }
}
var mtm = new MtmContent(); 
export default mtm;
