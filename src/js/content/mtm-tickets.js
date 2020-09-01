import MtmOwlCarousel from '../utility/mtm-owl-carousel.js';

class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7,config){

    f7.preloader.show();

    f7.request({
      url: config.data.url+config.data.url_tickets,
      cache: false,
      crossDomain: true,
      success: function(data,status,xhr){
        var ticketsContent = $('<div>').append(data).find('#main-content');
        $('#tickets-content').html(ticketsContent);
          
        f7.preloader.hide();
        MtmOwlCarousel.loadOwlCarouselSingle('.teaser-content-with-carousel .owl-carousel');      
   
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
