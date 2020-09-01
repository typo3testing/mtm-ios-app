var scriptOwl = ['static/js/lib/owl.carousel.js'];
class MtmOwlCarousel {
  constructor() {
  }
  loadOwlCarouselSingle(cssClass){
      $.getScript(scriptOwl, function(data, textStatus) {
            $(cssClass).owlCarousel({
                loop: true,
                dots: false,
                margin: 30,
                nav: true,
                items: 1,
            });
       });
  };
  loadOwlCarousel(cssClass){
      $.getScript(scriptOwl, function(data, textStatus) {
            $(cssClass).owlCarousel({
                loop: false,
                dots: false,
                margin: 30,
                nav: false,
                items: 3,
            });
       });
  };
  kaderOwlCarousel(cssClass){
      $.getScript(scriptOwl, function(data, textStatus) {
            $(cssClass).owlCarousel({
                loop: false,
                dots: false,
                margin: 5,
                nav: false,
                items: 3,
            });
       });
  };
  SocialitemOwlCarousel(cssClass){
    $.getScript(scriptOwl, function(data, textStatus) {
          $(cssClass).owlCarousel({
            loop: false,
            dots: false,
            margin: 30,
            nav: false,
            items: 3,
          });
    });
  };
  videoitemOwlCarousel(cssClass){
    $.getScript(scriptOwl, function(data, textStatus) {
          $(cssClass).owlCarousel({
            loop:true,
            dots:false,
            margin:40,
            nav:true,
            items:1,
          });
    });
  };
  productdetailsOwlCarousel(cssClass){
    $.getScript(scriptOwl, function(data, textStatus) {
          $(cssClass).owlCarousel({
            loop:true,
            dots:true,
            margin:0,
            nav:true,
            items: 1
          });
    });
  };
};
var mtm = new MtmOwlCarousel(); 
export default mtm;
