cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-keyboard.keyboard",
      "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
      "pluginId": "cordova-plugin-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
      "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "cordova-plugin-wkwebview-engine",
      "clobbers": [
        "cordova.exec"
      ]
    },
    {
      "id": "cordova-plugin-wkwebview-engine.ios-wkwebview",
      "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview.js",
      "pluginId": "cordova-plugin-wkwebview-engine",
      "clobbers": [
        "window.WkWebView"
      ]
    },
    {
      "id": "cordova-plugin-wkwebview-file-xhr.formdata-polyfill",
      "file": "plugins/cordova-plugin-wkwebview-file-xhr/src/www/ios/formdata-polyfill.js",
      "pluginId": "cordova-plugin-wkwebview-file-xhr",
      "runs": true
    },
    {
      "id": "cordova-plugin-wkwebview-file-xhr.xhr-polyfill",
      "file": "plugins/cordova-plugin-wkwebview-file-xhr/src/www/ios/xhr-polyfill.js",
      "pluginId": "cordova-plugin-wkwebview-file-xhr",
      "runs": true
    },
    {
      "id": "cordova-plugin-wkwebview-file-xhr.fetch-bootstrap",
      "file": "plugins/cordova-plugin-wkwebview-file-xhr/src/www/ios/fetch-bootstrap.js",
      "pluginId": "cordova-plugin-wkwebview-file-xhr",
      "runs": true
    },
    {
      "id": "cordova-plugin-wkwebview-file-xhr.fetch-polyfill",
      "file": "plugins/cordova-plugin-wkwebview-file-xhr/src/www/ios/whatwg-fetch-2.0.3.js",
      "pluginId": "cordova-plugin-wkwebview-file-xhr",
      "runs": true
    },
    {
      "id": "cordova-plugin-firebase-lib.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebase-lib/www/firebase.js",
      "pluginId": "cordova-plugin-firebase-lib",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-customurlscheme.LaunchMyApp",
      "file": "plugins/cordova-plugin-customurlscheme/www/ios/LaunchMyApp.js",
      "pluginId": "cordova-plugin-customurlscheme",
      "clobbers": [
        "window.plugins.launchmyapp"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-keyboard": "1.2.0",
    "cordova-plugin-splashscreen": "5.0.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-wkwebview-engine": "1.2.1",
    "cordova-plugin-wkwebview-file-xhr": "2.1.4",
    "cordova-plugin-firebase-lib": "5.1.1",
    "cordova-plugin-androidx": "2.0.0",
    "cordova-plugin-androidx-adapter": "1.1.1",
    "cordova-plugin-inappbrowser": "4.0.0",
    "cordova-plugin-customurlscheme": "5.0.2"
  };
});