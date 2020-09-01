import MtmOwlCarousel from '../utility/mtm-owl-carousel.js';

class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7,config){

      f7.preloader.show();

      f7.request({
        url: config.data.url+config.data.url_youtubelist,
        cache: false,
        crossDomain: true,
        dataType: 'json',
        success: function(data,status,xhr){

          $('#youtubelistdata').html(data);
          MtmOwlCarousel.SocialitemOwlCarousel('.kader-module .link-tab-varient.var-1 .info-tab-link-carousel .owl-carousel');
          MtmOwlCarousel.videoitemOwlCarousel('.video-items-in-carousel .owl-carousel');

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
