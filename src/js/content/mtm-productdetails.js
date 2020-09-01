import MtmOwlCarousel from '../utility/mtm-owl-carousel.js';
import MtmUtility from '../utility/mtm-utility.js';
import localforage from "localforage";
class MtmContent {
  constructor() {
  }
  static addCart(f7,config,cart_item){  

       f7.preloader.show();

       localforage.getItem('user_cart_key', function(err, cart_key) {
           if(cart_key === null){
              var new_cart_key = MtmUtility.random(12);
              localforage.setItem('user_cart_key', new_cart_key);
              cart_key = new_cart_key;
           }
           localforage.getItem('user-uid', function(err, user_uid) {
              f7.request({
                url: config.data.url+config.data.url_addcart,
                method:"POST",
                cache: false,
                crossDomain: true,
                data:{user_uid:user_uid,cart_key:cart_key,cart_item:cart_item},
                dataType: 'json',
                success: function(data,status,xhr){
                   $('.cart_no').html(data.count);
                   localforage.setItem('user_cart_no', data.count);
                   f7.view.main.router.navigate('/cart/');
                },
                error: function(xhr,status){
                  console.log('xhr: '+xhr);
                  console.log('status: '+status);
                }
              });


           });
           
       });
  }
  static getProductDetailSize(f7,config){
             var size =jQuery("#pdetail_size").val();
             var color =jQuery("#pdetail_color").val();             
             var productid =jQuery("#productid").val();
             var bedru =jQuery("#pdetails_bedruckung").val();

             f7.request({
              url: config.data.url+config.data.url_productsize,
              method:"POST",
              cache: false,
              crossDomain: true,
              data:{size:size,color:color,method:'size',productid:productid,bedru:bedru},
              dataType: 'json',

             success: function(data,status,xhr){
                  if(data.show_bedruckung==true){
                      jQuery("#pdetails_bedruckung").html(data.bedrudata);
                       jQuery("#BEDRUCKUNG").css("display","block");
                       if(jQuery("#pdetails_bedruckung").val()=='0') {
                      
                          jQuery('#custom_block').show();
                       }
                   }
                   else{
                      jQuery("#BEDRUCKUNG").css("display","none");
                      jQuery('#custom_block').hide();

                   }
              if(data.show_color==true){
                  jQuery("#pdetail_color").html(data.colordata);
                  jQuery("#FARBE").css("display","block");
               }
               else{
                   jQuery("#FARBE").css("display","none");

               }
                jQuery("#dprice").html(data.dprice);
                jQuery("#oldprice").html(data.price);
                jQuery("#attr_id").val(data.attr_id);
            },
              error: function(xhr,status){
              console.log('xhr: '+xhr);
              console.log('status: '+status);
            }
            });
  }
  static getProductDetailColor(f7,config){


        var size =jQuery("#pdetail_size").val();
             var color =jQuery("#pdetail_color").val();
             var productid =jQuery("#productid").val();
             if( jQuery("#BEDRUCKUNG").css("display")=='block'){
                var bedru =jQuery("#pdetails_bedruckung").val();
             }
             else{
              var bedru='';
             }


           // alert(bedru);
           //            alert(size);

             f7.request({
              url: config.data.url+config.data.url_productsize,
              method:"POST",
              cache: false,
              crossDomain: true,
              data:{size:size,color:color,method:'color',productid:productid,bedru:bedru},
              dataType: 'json',

             success: function(data,status,xhr){
              //alert(data.colordata);
               if(data.show_bedruckung==true){
              jQuery("#pdetails_bedruckung").html(data.bedrudata);
               jQuery("#BEDRUCKUNG").css("display","block");
                if(jQuery( "#pdetails_bedruckung" ).val()=='0') {
              
                  jQuery('#custom_block').show();
              }
             }
             else{
              jQuery("#BEDRUCKUNG").css("display","none");
              jQuery('#custom_block').hide();

             }
              if(data.show_size==true){
              jQuery("#grosee").css("display","block");
              jQuery("#pdetail_size").html(data.sizedata);
             }
              else{
              jQuery("#grosee").css("display","none");

             }
              jQuery("#dprice").html(data.dprice);
              jQuery("#oldprice").html(data.price);
              jQuery("#attr_id").val(data.attr_id);

              



            },
              error: function(xhr,status){
              console.log('xhr: '+xhr);
              console.log('status: '+status);
            }
            });


  }
  static getProductDetails(f7,config,productid){
     f7.request({
        url: config.data.url+config.data.url_productdetails,
        method:"POST",
        cache: false,
        crossDomain: true,
        data:{productid:productid},
        dataType: 'json',

        success: function(data,status,xhr){
          $('#productdetaildata').html(data);
          MtmOwlCarousel.productdetailsOwlCarousel('.product-showcase .owl-carousel');
          jQuery( "#pdetails_bedruckung" ).change(function() {
                if(jQuery(this).val()=='0'){
                    jQuery('#custom_block').show();
                }
                else{
                    jQuery('#custom_block').hide();
                }
          });
          jQuery('.value-button.decrease').on('click',function(){
             if(Number(jQuery("#productdetail_qty").val()) > 1){
                jQuery("#productdetail_qty").val( Number(jQuery("#productdetail_qty").val()) - 1 );
             }   
          });
            jQuery('.value-button.increase').on('click',function(){
                if(Number(jQuery("#productdetail_qty").val()) < 10){
                    jQuery("#productdetail_qty").val( Number(jQuery("#productdetail_qty").val()) + 1 );
                } 
          });

          jQuery('#add_to_cart').on('click',function(e){
               var qty = jQuery('#productdetail_qty').val();
               var attr_id = jQuery('#attr_id').val();
               var product_id = jQuery('#productid').val();
               var pdetails_bedruckung = jQuery('#pdetails_bedruckung').val();
               var custome_name = jQuery('#custome_name').val();
               var custome_no = jQuery('#custome_no').val();

               let cart_item = {
                    "qty": qty,
                    "attr_id": attr_id,
                    "product_id": product_id,
                    "pdetails_bedruckung": pdetails_bedruckung,
                    "custome_name": custome_name,
                    "custome_no": custome_no,
                }
               MtmContent.addCart(f7,config,cart_item);
               e.stopPropagation();
          });   
        
          jQuery( "#pdetail_size" ).change(function() {
            MtmContent.getProductDetailSize(f7,config);
          });
          jQuery( "#pdetail_color" ).change(function() {
            MtmContent.getProductDetailColor(f7,config)
          });  


          f7.preloader.hide();
        },
          error: function(xhr,status){
          console.log('xhr: '+xhr);
          console.log('status: '+status);
        }
        });
  }
  contentPageAfterIn(f7,config){

     f7.preloader.show();
     var productid=f7.view.main.router.currentRoute.params.productid;
     MtmContent.getProductDetails(f7,config,productid); 

  }
}
var mtm = new MtmContent(); 
export default mtm;
