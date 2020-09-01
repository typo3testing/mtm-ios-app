import $$ from 'dom7';
import localforage from "localforage";
class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7,config){

    f7.toolbar.hide('.toolbar');

    $$('.login-submit').on('click', function (e) {
      f7.preloader.show('red');
      e.preventDefault();
      var username = $$(this).parents('#login-form').find('#user').val();
      var password = $$(this).parents('#login-form').find('#pass').val();

      f7.request.promise.get(config.data.url+config.data.url_anmeldung, { user: username, pass: password, logintype: 'login', pid: '46' })
      .then(function (res) {
        if (res) {
          var logedinUser = $$('<div>').append(res.data).find('#logedin-user');
          var logedinUserUid = $$('<div>').append(res.data).find('#user-uid').html();
          var logedinUserFname = $$('<div>').append(res.data).find('#user-fname').html();
          var logedinUserLname = $$('<div>').append(res.data).find('#user-lname').html();
          f7.preloader.hide();
          if(logedinUser.length > 0){
            localforage.setItem('user-logedin', 'true');
            localforage.setItem('user-email', logedinUser.html());
            localforage.setItem('user-password', password);
            localforage.setItem('user-uid', logedinUserUid);
            localforage.setItem('user-fname', logedinUserFname);
            localforage.setItem('user-lname', logedinUserLname);
            // redirect to profil page
            f7.view.main.router.navigate('/mein-profil/');
          } else {
            localforage.removeItem('user-logedin');
            localforage.removeItem('user-email');
            localforage.removeItem('user-password');
            localforage.removeItem('user-uid');
            localforage.removeItem('user-fname');
            localforage.removeItem('user-lname');

            f7.dialog.create({
              title: 'Anmeldungsfehler',
              text: 'Bitte überprüfen Sie Ihre Anmeldeinformationen',
              buttons: [
                {
                  text: 'Ok',
                }
              ],
            }).open();
            
          };
        };
      });

    });    

  }
}
var mtm = new MtmContent(); 
export default mtm;