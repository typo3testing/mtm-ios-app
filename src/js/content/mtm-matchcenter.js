import MtmOwlCarousel from '../utility/mtm-owl-carousel.js';
class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7,config){

        f7.preloader.show();

        f7.request({
        url: config.data.url+config.data.url_matchcenter,
        cache: false,
        crossDomain: true,
        dataType: 'json',
        success: function(data,status,xhr){
        $('#tabllen').html(data);

         // the-tabelle.app-view
        jQuery(document).on("click", ".the-tabelle.app-view", function(e){
        jQuery('.tickting-button-wrap').hide();
        jQuery(this).find('.tickting-button-wrap').show();
        e.stopPropagation();
        });

        jQuery(document).on("click", ".trigger-extended-info", function(e){
            jQuery('.tebelle-app-extended-info').hide();
            jQuery(this).find('.tebelle-app-extended-info').show();
            e.stopPropagation();
        });


        MtmOwlCarousel.loadOwlCarousel('.kader-module .link-tab-varient.var-1 .info-tab-link-carousel .owl-carousel');

        
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
