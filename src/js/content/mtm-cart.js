import $$ from 'dom7';
import localforage from "localforage";
class MtmContent {
  constructor() {
  }
  contentPageInit(f7,config){
       f7.preloader.show();
       localforage.getItem('user_cart_key', function(err, cart_key) {
           if(cart_key === null){
              var new_cart_key = MtmUtility.random(12);
              localforage.setItem('user_cart_key', new_cart_key);
              cart_key = new_cart_key;
           }
           localforage.getItem('user-uid', function(err, user_uid) {
              f7.request({
                url: config.data.url+config.data.url_cart,
                method:"POST",
                cache: false,
                crossDomain: true,
                data:{user_uid:user_uid,cart_key:cart_key},
                dataType: 'json',
                success: function(data,status,xhr){
                   //console.log(data);
                   $('#cart').html(data);
                     
                   f7.preloader.hide();

                   jQuery('.delete-cart a').on('click',function(e){
                      var cart_id =jQuery(this).data('id');
                      MtmContent.deleteCart(f7,config,{user_uid:user_uid,cart_key:cart_key,cart_id:cart_id,cart_method:"delete"});
                      e.stopPropagation();
                   });
                   jQuery('.inc-box .decrease').on('click',function(e){
                      var cart_id = jQuery(this).data('id');
                      var cart_qty = jQuery('.cart_'+cart_id).val();
                      cart_qty--;
                      jQuery('.cart_'+cart_id).val(cart_qty);
                      MtmContent.updateCart(f7,config,{user_uid:user_uid,cart_key:cart_key,cart_id:cart_id,qty:cart_qty,cart_method:"edit"});
                      e.stopPropagation();
                   });   
                   jQuery('.inc-box .increase').on('click',function(e){
                      var cart_id =jQuery(this).data('id');
                      var cart_qty = jQuery('.cart_'+cart_id).val();
                      cart_qty++;
                      jQuery('.cart_'+cart_id).val(cart_qty);
                     MtmContent.updateCart(f7,config,{user_uid:user_uid,cart_key:cart_key,cart_id:cart_id,qty:cart_qty,cart_method:"edit"});
                      e.stopPropagation();
                   }); 


                   jQuery('.cart-back a').on('click',function(e){
                     f7.view.main.router.back();
                     e.stopPropagation();
                   });   
                   // libs
                     var scriptMatchheight = ['static/js/lib/jquery.matchHeight-min.js'];
                     $.getScript(scriptMatchheight, function(data, textStatus) {
                       jQuery('.cart-table-match-height').matchHeight();
                    });
                  // libs
                },
                error: function(xhr,status){
                  console.log('xhr: '+xhr);
                  console.log('status: '+status);
                }
              });


           });
           
       });
  }
   static deleteCart(f7,config,data){
        f7.preloader.show();
        f7.request({
            url: config.data.url+config.data.url_cartupdate,
            method:"POST",
            cache: false,
            crossDomain: true,
            data:data,
            dataType: 'json',
            success: function(data,status,xhr){
               f7.preloader.hide();
               $('.cart_no').html(data.count);
               localforage.setItem('user_cart_no', data.count);
               f7.view.main.router.navigate('/warenkorb/');
            },
            error: function(xhr,status){
              console.log('xhr: '+xhr);
              console.log('status: '+status);
            }
          });
  }
  static updateCart(f7,config,data){
    f7.preloader.show();
        f7.request({
            url: config.data.url+config.data.url_cartupdate,
            method:"POST",
            cache: false,
            crossDomain: true,
            data:data,
            dataType: 'json',
            success: function(data,status,xhr){
               f7.preloader.hide();
               $('.cart_no').html(data.count);
               localforage.setItem('user_cart_no', data.count);
               f7.view.main.router.navigate('/warenkorb/');
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