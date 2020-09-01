import $$ from 'dom7';

class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7,config){

    f7.request({
      url: config.data.url+config.data.url_registration,
      cache: false,
      crossDomain: true,
      dataType: 'json',
      success: function(data,status,xhr){
        $('#land,#sland').html(data);
      },
      error: function(xhr,status){
        console.log('xhr: '+xhr);
        console.log('status: '+status);
      }
    });

    // Close alert
    $$('.close').click(function(){
      $$(this).parent().hide(); 
    });

    // gration option first child value none
    $$('#gration option:first-child').val('');

    // Form ID
    var formID = $$('#registrationform');
    var emailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    // Email on input
    formID.find('input[type=email].required').on('input blur', function() {
      if( $$(this).val().length < 1 ) {
        $$(this).addClass('danger');
      } else {
        $$(this).removeClass('danger');
        $$(this).parents('.form-col').find('.alert').hide();
      };
    });

    // Password on input
    formID.find('input[type=password].required').on('input blur', function() {
      if( $$(this).val().length < 1 ) {
        $$(this).addClass('danger');
      } else {
        $$(this).removeClass('danger');
        $$(this).parents('.form-col').find('.alert').hide();
      };
    });

    // Text field on input
    formID.find('input[type=text].required').on('input blur', function() {
      if( $$(this).val().length < 1 ) {
        $$(this).addClass('danger');
      } else {
        $$(this).removeClass('danger');
        $$(this).parents('.form-col').find('.alert').hide();
      };
    });

    // Title field on change
    formID.find('#gration').on('change', function() {
      if( $$(this).val() === '' ) {
        $$(this).parent().addClass('danger');
      } else {
        $$(this).parent().removeClass('danger');
        $$(this).parents('.form-col').find('.alert').hide();
      };
    });

    // checkbox field on change
    formID.find('input[type=checkbox].required').on('change', function() {
      if($$(this).prop('checked')==false){
        $$(this).parent().addClass('danger');
      } else {
        $$(this).parent().removeClass('danger');
        $$(this).parents('.form-field').find('.required-error').hide();
      };
    });

    // Land field on change
    formID.find('#land').on('change', function() {
      if( $$(this).val() === '' ) {
        $$(this).parent().addClass('danger');
      } else {
        $$(this).parent().removeClass('danger');
        $$(this).parents('.form-col').find('.alert').hide();
      };
    });

    // Form submit function
    $$('#regbutton').on('click', function (e) {

      e.preventDefault();

      // Email
      formID.find('input[type=email].required').each(function(){
        if($$(this).val() == ''){
          $$(this).addClass('danger');
          $$(this).parents('.form-col').find('.required-error').show();
          $$(this).parents('.form-col').find('.format-error').hide();
        } else {
          $$(this).parents('.form-col').find('.required-error').hide();

          var emailValue = $$(this).val();
          if(!emailPattern.test(emailValue)){
            $$(this).addClass('danger');
            $$(this).parents('.form-col').find('.format-error').show();
          } else {
            $$(this).removeClass('danger');
            $$(this).parents('.form-col').find('.format-error').hide();
          };
        };
      });

      // Password
      formID.find('input[type=password].required').each(function(){
        if($$(this).val() == ''){
          $$(this).addClass('danger');
          $$(this).parents('.form-col').find('.required-error').show();
          $$(this).parents('.form-col').find('.length-error').hide();
        } else {
          $$(this).parents('.form-col').find('.required-error').hide();

          if($$(this).val().length < 8){
            $$(this).addClass('danger');
            $$(this).parents('.form-col').find('.length-error').show();
          } else {
            $$(this).removeClass('danger');
            $$(this).parents('.form-col').find('.length-error').hide();
          };
        };
      });

      // Text field
      formID.find('input[type=text].required').each(function(){
        if($$(this).val() == ''){
          $$(this).addClass('danger');
          $$(this).parents('.form-col').find('.required-error').show();
        } else {
          $$(this).removeClass('danger');
          $$(this).parents('.form-col').find('.required-error').hide();
        };
      });

      // Checkbox
      formID.find('input[type=checkbox].required').each(function(){
        if($$(this).prop('checked')==false){
          $$(this).parent().addClass('danger');
          $$(this).parents('.form-field').find('.required-error').show();
        } else {
          $$(this).parent().removeClass('danger');
          $$(this).parents('.form-field').find('.required-error').hide();
        };
      });

      // Title
      if($$('#gration').val() === ''){
        $$('#gration').parent().addClass('danger');
        $$('#gration').parents('.form-col').find('.required-error').show();
      } else {
        $$('#gration').parent().removeClass('danger');
        $$('#gration').parents('.form-col').find('.required-error').hide();
      };

      // Country
      if($$('#land').val() === ''){
        $$('#land').parent().addClass('danger');
        $$('#land').parents('.form-col').find('.required-error').show();
      } else {
        $$('#land').parent().removeClass('danger');
        $$('#land').parents('.form-col').find('.required-error').hide();
      };
      
      // Getting value & submit
      if(formID.find('.danger').length < 1){

      	var email=jQuery('#email').val();
        var password=jQuery('#password').val();
        var gration=jQuery('#gration').val();
        var fname=jQuery('#fname').val();
        var lastname=jQuery('#lastname').val();
        var firma=jQuery('#firma').val();
        var strabe=jQuery('#strabe').val();
        var houseno=jQuery('#houseno').val();
        var additive=jQuery('#additive').val();
        var plz=jQuery('#plz').val();
        var ort=jQuery('#ort').val();
        var land=jQuery('#land').val();
        var tel=jQuery('#tel').val();
        var lorem=jQuery('#lorem:checked').val();
        var lorem1=jQuery('#lorem1:checked').val();
        var sgration=jQuery('#sgration').val();
        var sfname=jQuery('#sfname').val();
        var slname=jQuery('#slname').val();
        var sfirma=jQuery('#sfirma').val();
        var sstrabe=jQuery('#sstrabe').val();
        var shouseno=jQuery('#shouseno').val();
        var sadditive=jQuery('#sadditive').val();
        var splz=jQuery('#splz').val();
        var sort=jQuery('#sort').val();
        var sland=jQuery('#sland').val();

      	f7.request.post(config.data.url+config.data.url_registration, {
          register:'register',
          email:email,
          password:password,
          gration:gration,
          fname:fname,
          lastname:lastname,
          firma:firma,
          strabe:strabe,
          houseno:houseno,
          additive:additive,
          plz:plz,
          ort:ort,
          land:land,
          tel:tel,
          lorem:lorem,
          lorem1:lorem1,
          sgration:sgration,
          sfname:sfname,
          slname:slname,
          sfirma:sfirma,
          sstrabe:sstrabe,
          shouseno:shouseno,
          sadditive:sadditive,
          splz:splz,
          sort:sort,
          sland:sland
          }, function (data) {
            if (data==1) {
              f7.dialog.alert('Registrierung erfolgreich, bitte E-Mail überprüfen', function () {
                f7.views.main.router.back('/anmeldung/', {
                  ignoreCache: true,
                  force: true,
                  context: {}
                });
              });
            } else {
              f7.dialog.alert('E-Mail ist bereits vorhanden');
            };
        });

      };
      
    });

  }
}
var mtm = new MtmContent(); 
export default mtm;
