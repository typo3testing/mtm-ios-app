var scriptFancy = ['static/js/lib/jquery.fancybox.js'];
class MtmFancybox {
  constructor() {
  }
  loadjqueryfancybox(){
      $.getScript(scriptFancy, function(data, textStatus) {
           
       });
  };
};
var mtm = new MtmFancybox(); 
export default mtm;
