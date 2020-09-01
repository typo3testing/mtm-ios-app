import MtmOwlCarousel from '../utility/mtm-owl-carousel.js';
import localforage from "localforage";
class MtmContent {
  constructor() { 
  }
  static getNewsData(f7,config,month){


      f7.preloader.show();
      f7.request({
      url: config.data.url+config.data.url_kalender,
      cache: false,
      data:{month:month},
      crossDomain: true,
      dataType: 'json',
      success: function(data,status,xhr){
          $('#kalender-list').html(data.html);

          jQuery( "#kalender_months" ).empty();
          for (month of data.months) {
              var selected = "";
              if(month.mn == data.sel_month){
                  selected = "selected";
              }
              jQuery( "#kalender_months" ).append('<option  value=' + month.mn + ' '+selected+' >' + month.month + '</option>');
          }
          jQuery('.news-link').on('click', function () {
                var newsUrl = jQuery(this).attr('data-url');
                localforage.setItem('news-detail-link', newsUrl);
          });
          // the-termine-list
          jQuery('.the-termine-list').click(function(){
            jQuery(this).parent('.the-termin-list-group').find('.the-termine-list').not(this).find('.secondary').hide(); 
            jQuery(this).find('.secondary').toggle();
          });

          f7.preloader.hide();
        },
        error: function(xhr,status){
          console.log('xhr: '+xhr);
          console.log('status: '+status);
        }
      });

}  
contentPageMounted(f7,config){
        MtmContent.getNewsData(f7,config,"");
        jQuery( "#kalender_months" ).change(function() {
           MtmContent.getNewsData(f7,config,jQuery( "#kalender_months" ).val());
        });

        MtmOwlCarousel.loadOwlCarousel('.kader-module .link-tab-varient.var-1 .info-tab-link-carousel .owl-carousel'); 
}
}
var mtm = new MtmContent(); 
export default mtm;
