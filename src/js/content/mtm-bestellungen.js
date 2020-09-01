import localforage from "localforage";
import $$ from 'dom7';


class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7,config){
          f7.preloader.show();

            localforage.getItem('user-uid', function(err, value) {
            localforage.getItem('user-fname', function(err, value) {
              if (value) {
                $$('#user-fname').html(value);
                localforage.getItem('user-lname', function(err, value) {
                  $$('#user-lname').html(value);
                });
              } else {
                localforage.getItem('user-email', function(err, value) {
                  $$('#user-fname').html(value);
                });

                   
              }
            });
           
          f7.request({
            url: config.data.url+config.data.url_myccountorder,
            method:"POST",
            cache: false,
            crossDomain: true,
            data:{user_id:value},
            dataType: 'json',
            success: function(data,status,xhr){
            $('#myorder').html(data);

           
                // cart accordion
            jQuery('.accordion-trigger').click(function(){
              jQuery(this).parent().find('.collapsed-area').slideToggle();
              jQuery(this).toggleClass('open');
            });
                
              f7.preloader.hide();
            },
            error: function(xhr,status){
                console.log('xhr: '+xhr);
                console.log('status: '+status);
            }
              });
        });

  }
}
var mtm = new MtmContent(); 
export default mtm;
