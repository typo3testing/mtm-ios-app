import $$ from 'dom7';
import localforage from "localforage";
class MtmContent {
  constructor() {
  }
  contentPageInit(f7){

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    localforage.getItem('user-fname', function(err, value) {
      if (value) {
        $$('#user-firstname').html(value);
        localforage.getItem('user-lname', function(err, value) {
          $$('#user-lastname').html(value);
        });
      } else {
        localforage.getItem('user-email', function(err, value) {
          $$('#user-firstname').html(value);
        });
      };
    });

    $$('.logout-button').on('click', function (e) {
      e.preventDefault();
      f7.preloader.show();
      setTimeout(function () {
        localforage.removeItem('user-logedin');
        localforage.removeItem('user-email');
        localforage.removeItem('user-password');
        localforage.removeItem('user-uid');
        localforage.removeItem('user-fname');
        localforage.removeItem('user-lname');
        f7.preloader.hide();
        f7.view.main.router.navigate('/');
      }, 2000);
    });

  }
}
var mtm = new MtmContent(); 
export default mtm;
