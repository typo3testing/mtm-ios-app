
class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7,config){
      f7.preloader.show();

      var listid=f7.view.main.router.currentRoute.params.listid;
  
      //alert(listid);

      f7.request({
        url: config.data.url+config.data.url_youtubedetails,
        method:"POST",
        cache: false,
        crossDomain: true,
        data:{listid:listid},
        dataType: 'json',

        success: function(data,status,xhr){

          $('#youtubedetaildata').html(data);
          //alert(data);
          console.log(data);
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
