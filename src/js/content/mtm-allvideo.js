import $$ from 'dom7';

class MtmContent {
  constructor() {
  }
  contentPageAfterIn(f7,config){


      f7.preloader.show();

      f7.request({
        url: config.data.url+config.data.url_allvideo,
        cache: false,
        crossDomain: true,
        dataType: 'json',
        success: function(data,status,xhr){

          var allowInfinite = true;
          var maxItems = 260;
          var itemsPerLoad = 20;
          var allVideos = $('<div>').append(data);
          var firtVideos = allVideos.find('.video-list:lt('+itemsPerLoad+')');
          var lastItemIndex = $('.infinite-scroll-content .video-list').length;
          var onBackFirstVideos = allVideos.find('.video-list:lt('+lastItemIndex+')');

          if(lastItemIndex > itemsPerLoad){
            $('#allvideodata').html(onBackFirstVideos);
          } else {
            $('#allvideodata').html(firtVideos);
          };

          f7.preloader.hide();

          if (lastItemIndex >= maxItems) {
            f7.infiniteScroll.destroy('.infinite-scroll-content');
            $('.infinite-scroll-preloader').addClass('hidden');
          } else {
            $('.infinite-scroll-preloader').removeClass('hidden');
          };

          $('.infinite-scroll-content').on('infinite', function (e) {

            e.preventDefault();   
            e.stopImmediatePropagation();

            if (!allowInfinite) return;
            allowInfinite = false;

            setTimeout(function () {
              allowInfinite = true;

              if (lastItemIndex >= maxItems) {
                f7.infiniteScroll.destroy('.infinite-scroll-content');
                $('.infinite-scroll-preloader').addClass('hidden');
                return;
              } else {
                var nextVideos = allVideos.find('.video-list').slice(0, itemsPerLoad);
              }

              $('#allvideodata').append(nextVideos);
              lastItemIndex = $('.infinite-scroll-content .video-list').length;
            }, 1000);

          });
           
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
