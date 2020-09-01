import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = jQuery;

import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import localforage from "localforage";

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.scss';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component
  id: 'io.framework7.mtmelsungen', // App bundle ID
  name: 'MT Melsungen', // App name
  theme: 'auto', // Automatic theme detection
  cache: false,
  cacheIgnoreGetParameters: false,
  material: true,


  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    androidBackgroundColor: '#900505',
    iosBackgroundColor: '#900505',
    androidTextColor: 'white',
    iosTextColor: 'white',
    iosOverlaysWebView: false,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});

// on back press App exit on start page
var opened = 0;
function exitApp(){
  if (opened > 0) {
    return false;
  } else {
    app.dialog.confirm('Sie sind sicher, dass Sie beenden wollen?', 'App beenden', 
      function () {
      navigator.app.exitApp();
      },
      function () {
      opened = 0;  
      return false;
      }
    );
    opened = 1;
  }
}

    
function onBackKeyDown() {
  // Handle the back button
  if(app.views.main.router.url == '/'){
    exitApp();
    e.preventDefault();
  } else {
    app.dialog.close();
    app.views.main.router.back();
    return false;
  }
}

document.addEventListener("backbutton", onBackKeyDown, false);