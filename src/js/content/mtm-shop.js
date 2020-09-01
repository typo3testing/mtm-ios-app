class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7,config){
          f7.preloader.show();
          f7.request({
            url: config.data.url+config.data.url_productlist,
            cache: false,
            crossDomain: true,
            dataType: 'json',
            success: function(data,status,xhr){
            $('#productlist').html(data);

           
               
                
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
