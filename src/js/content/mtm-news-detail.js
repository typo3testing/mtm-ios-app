import localforage from "localforage";
class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7){

    f7.preloader.show();

    localforage.getItem('news-detail-link', function(err, value) {
      if (value) {
        f7.request({
          url: value,
          cache: false,
          crossDomain: true,
          success: function(data,status,xhr){
            var newsDetailContent = $('<div>').append(data).find('#main-content');
            $('#news-detail').html(newsDetailContent);

            jQuery('.set-back').each(function(){
              var SETBACK = jQuery(this).find('img').attr('src');
              jQuery(this).css('background-image', 'url(' + SETBACK + ')');
            });

            localforage.setItem('news-detail-link', '');
              
            f7.preloader.hide();
          },
          error: function(xhr,status){
              console.log('xhr: '+xhr);
              console.log('status: '+status);
          }
        });
      } else {
        console.log(err);
      }
    });

    

  }
}
var mtm = new MtmContent(); 
export default mtm;
