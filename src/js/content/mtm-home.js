import MtmOwlCarousel from '../utility/mtm-owl-carousel.js';
import localforage from "localforage";
class MtmContent {
  constructor() {
  }
  contentInit(f7,config){
      f7.preloader.show();
      f7.request({
        url: config.data.url,
        cache: false,
        crossDomain: true,
        success: function(data,status,xhr){
          var homeContent = $('<div>').append(data).find('#main-content');
          $('#homepage-content').html(homeContent);
          
          f7.preloader.hide();

          // Set back
          jQuery('.set-back').each(function(){
            var SETBACK = jQuery(this).find('img').attr('src');
            jQuery(this).css('background-image', 'url(' + SETBACK + ')');
          });


          MtmOwlCarousel.loadOwlCarouselSingle('.news-teaser-module.with-carousel .owl-carousel');
          
          // News Link
          jQuery('.news-teaser-module .news-link').each(function(){
              jQuery(this).attr('href', '/news/details/');
          });

          jQuery('.news-teaser-module .news-link').on('click', function () {
              var newsUrl = jQuery(this).attr('data-url');
              localforage.setItem('news-detail-link', newsUrl);
          });

          if(eventDate){

          var countDownDate = new Date(eventDate).getTime();

          // Update the count down every 1 second
          var x = setInterval(function() {

            // Get today's date and time
            var now = new Date();
           //alert(now);

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            days = (days < 10 ? '0' : '') + days;
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            hours = (hours < 10 ? '0' : '') + hours;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            minutes = (minutes < 10 ? '0' : '') + minutes;
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            jQuery('#leftday').html(days);
            jQuery('#lefthours').html(hours);
            jQuery('#leftmin').html(minutes);
          

            // If the count down is finished, write some text
            if (distance < 0) {
              clearInterval(x);
              jQuery('#timeleft').html('EXPIRED');
            }
          }, 1000);

        };

        },
        error: function(xhr,status){
          console.log('xhr: '+xhr);
          console.log('status: '+status);
        }
      });
  }
}
var mtm = new MtmContent(); 
export default mtm;
