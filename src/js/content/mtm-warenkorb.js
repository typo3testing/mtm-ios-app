import $$ from 'dom7';
import localforage from "localforage";
class MtmContent {
  constructor() {
  }
  contentPageInit(f7,config){
      MtmContent.cartData(f7,config);

  }

  static cartData(f7,config){



       f7.preloader.show();
       localforage.getItem('user_cart_key', function(err, cart_key) {
           if(cart_key === null){
              var new_cart_key = MtmUtility.random(12);
              localforage.setItem('user_cart_key', new_cart_key);
              cart_key = new_cart_key;
           }
           localforage.getItem('user-uid', function(err, user_uid) {
              f7.request({
                url: config.data.url+config.data.url_warenkorb,
                method:"POST",
                cache: false,
                crossDomain: true,
                data:{user_uid:user_uid,cart_key:cart_key},
                dataType: 'json',
                success: function(data,status,xhr){
                   //console.log(data);
                   $('#warenkorb').html(data);

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
                   jQuery('.place_order a').on('click',function(e){
                      if(user_uid === null){
                          f7.view.main.router.navigate('/anmeldung/');
                      }
                      else{
                        f7.preloader.show();
                        var payment_method = jQuery("#payment_method").val();

                        f7.request({
                            url: config.data.url+config.data.url_saveorder,
                            method:"POST",
                            cache: false,
                            crossDomain: true,
                            data:{user_uid:user_uid,cart_key:cart_key,payment_method:payment_method},
                            dataType: 'json',
                            success: function(data,status,xhr){
                              if(data.order_status==1){
                                localforage.setItem('user_cart_key', data.new_cart_key);
                                $('.cart_no').html("0");
                                localforage.setItem('user_cart_no', "0");
                                f7.view.main.router.navigate('/meine-bestellungen/');
                              }
                              if(data.order_status==2){
                                  // var win = window.open( data.external_url, "_blank", "location=yes,hidden=yes,beforeload=yes" );
                                  // win.addEventListener( "loadstop", function() {
                                  //     win.executeScript({ code: "alert( 'hello' );" });
                                  // });
                                  // win.addEventListener( "exit", function() {
                                  //     win.executeScript({ code: "alert( 'exit' );" });
                                  // });
                                  
                                  jQuery('#callPaypal').attr('href',data.external_url);
                                  jQuery('#callPaypal')[0].click();
                                  localforage.setItem('user_cart_key', data.new_cart_key);
                                  $('.cart_no').html("0");
                                  localforage.setItem('user_cart_no', "0");
                                  f7.view.main.router.navigate('/meine-bestellungen/');
                              }
                              if(data.order_status==3){
                                console.log(data);
                                alert("error processing order");
                              }
                               f7.preloader.hide();
                            },
                            error: function(xhr,status){
                              console.log('xhr: '+xhr);
                              console.log('status: '+status);
                            }
                          });
                      }
                      e.stopPropagation();
                   }); 

                   jQuery('.coupon_button a').on('click',function(e){
                     var coupon_code = jQuery('#coupon_code').val();  
                     if(coupon_code!=''){
                           f7.preloader.show();
                           f7.request({
                            url: config.data.url+config.data.url_cartredate,
                            method:"POST",
                            cache: false,
                            crossDomain: true,
                            data:{user_uid:user_uid,cart_key:cart_key,coupon_code:coupon_code},
                            dataType: 'json',
                            success: function(data,status,xhr){
                                if(data.rebate=='false'){
                                  alert("Invalid coupon code.");
                                }
                                else{
                                    MtmContent.cartData(f7,config);
                                }
                                f7.preloader.hide();
                              },
                            error: function(xhr,status){
                              console.log('xhr: '+xhr);
                              console.log('status: '+status);
                            }
                          });




                     }
                      e.stopPropagation();
                   }); 
                   
                   f7.preloader.hide();

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
               //f7.view.main.router.navigate('/warenkorb/');
               MtmContent.cartData(f7,config);
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
               MtmContent.cartData(f7,config);
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