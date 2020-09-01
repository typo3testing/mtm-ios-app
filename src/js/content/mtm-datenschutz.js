class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7,config){
          f7.preloader.show();
          f7.request({
            url: config.data.url+config.data.url_datenschutz,
            cache: false,
            crossDomain: true,
            success: function(data,status,xhr){
              var kontaktContent = $('<div>').append(data).find('#main-content');
              $('#datenschutz-content').html(kontaktContent);
                
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
