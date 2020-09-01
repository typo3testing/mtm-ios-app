var configUrl = ['static/config/config.json'];
class MtmApi {
  constructor() {
  }
  apiUrl(){
     var def = $.Deferred();
     //get our JSON and listen for done
    $.getJSON(configUrl)
        .done(function(data){
            def.resolve({
                data:data
            });
        });
    return def;
    // return this.url;
  }
}
var mtm = new MtmApi(); 
export default mtm;
