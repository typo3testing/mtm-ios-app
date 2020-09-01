import MtmJqueryFancybox from '../utility/mtm-jquery-fancybox.js';
import localforage from "localforage";
import $$ from 'dom7';


class MtmContent {
  constructor() {
  }

    static updatepayemnt(f7,config,value){
               var pname=$$('#pname').val();
                f7.request.post(config.data.url+config.data.url_updatemyccount,{ 
                  pname:pname,
                  user_id: value,
                  type:'editpay'
                  },function (data) {
                     f7.view.main.router.refreshPage();
                       parent.$.fancybox.close();
                         f7.dialog.create({
                            title: 'Standard Zahlungsrt',
                            text: 'Update erfolgreich',
                            buttons: [
                             {
                            text: 'Ok',
                            }
                          ],
                        }).open();
                       });

    }


    static updatesmethod(f7,config,value){

                var methodname=$$('#methodname').val();
                f7.request.post(config.data.url+config.data.url_updatemyccount,{ 
                  methodname:methodname,
                  user_id: value,
                  type:'editsmethod'
                  },function (data) {
                     f7.view.main.router.refreshPage();
                       parent.$.fancybox.close();
                         f7.dialog.create({
                            title: 'Standard Versandart',
                            text: 'Update erfolgreich',
                            buttons: [
                             {
                            text: 'Ok',
                            }
                          ],
                        }).open();
                       });

    }

    static updatebilladd(f7,config,value){

                var gender=$$('#gender').val();
                var fname=$$('#fname').val();
                var lname=$$('#lname').val();
                var company=$$('#company').val();
                var add=$$('#add').val();
                var housenumber=$$('#housenumber').val();
                var additive=$$('#additive').val();
                var zip=$$('#zip').val();
                var city=$$('#city').val();
                var country=$$('#country').val();
                localforage.setItem('user-fname', fname);
                localforage.setItem('user-lname', lname);


                f7.request.post(config.data.url+config.data.url_updatemyccount,{ 
                  gender:gender,
                  fname:fname,
                  lname:lname,
                  company:company,
                  add:add,
                  housenumber:housenumber,
                  additive:additive,
                  zip:zip,
                  city:city,
                  country:country,
                  user_id: value,
                  type:'editbill'
                  },function (data) {
                     f7.view.main.router.refreshPage();
                       parent.$.fancybox.close();
                         f7.dialog.create({
                            title: 'Rechungsadresse',
                            text: 'Update erfolgreich',
                            buttons: [
                             {
                            text: 'Ok',
                            }
                          ],
                        }).open();
                       });
    }

    static updateshipadd(f7,config,value){

                var sgender=$$('#sgender').val();
                var sfname=$$('#sfname').val();
                var slname=$$('#slname').val();
                var scompany=$$('#scompany').val();
                var sadd=$$('#sadd').val();
                var shousenumber=$$('#shousenumber').val();
                var sadditive=$$('#sadditive').val();
                var szip=$$('#szip').val();
                var scity=$$('#scity').val();
                var scountry=$$('#scountry').val();


                f7.request.post(config.data.url+config.data.url_updatemyccount,{ 
                  sgender:sgender,
                  sfname:sfname,
                  slname:slname,
                  scompany:scompany,
                  sadd:sadd,
                  shousenumber:shousenumber,
                  sadditive:sadditive,
                  szip:szip,
                  scity:scity,
                  scountry:scountry,
                  user_id: value,
                  type:'editshipping'
                  },function (data) {
                     f7.view.main.router.refreshPage();
                       parent.$.fancybox.close();
                         f7.dialog.create({
                            title: 'Lieferadresse',
                            text: 'Update erfolgreich',
                            buttons: [
                             {
                            text: 'Ok',
                            }
                          ],
                        }).open();
                       });
    }


  contentPageAfterIn(f7,config){
      f7.preloader.show();

        localforage.getItem('user-uid', function(err, value) {
          localforage.getItem('user-fname', function(err, value) {
              if (value) {
                $$('#userfname').html(value);
                localforage.getItem('user-lname', function(err, value) {
                  $$('#userlname').html(value);
                });
              } else {
                localforage.getItem('user-email', function(err, value) {
                  $$('#userfname').html(value);
                });

                   
              }
            });
           
  
        f7.request({
        url: config.data.url+config.data.url_myacountadd,
        method:"POST",
        cache: false,
        crossDomain: true,
        data:{user_id:value},
        dataType: 'json',
        success: function(data,status,xhr){
            $$('#uberchit').html(data);
            $$('#editpayment').on('click', function (e) {
                MtmContent.updatepayemnt(f7,config,value);
                 });

            $$('#editsmethod').on('click', function (e) {
                MtmContent.updatesmethod(f7,config,value);
                 });

             $$('#editsadd').on('click', function (e) {
                  MtmContent.updateshipadd(f7,config,value);
                 });
              $$('#editbadd').on('click', function (e) {
                  MtmContent.updatebilladd(f7,config,value);
                  
                 });
            MtmJqueryFancybox.loadjqueryfancybox();
            
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
