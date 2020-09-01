import MtmOwlCarousel from '../utility/mtm-owl-carousel.js';
import localforage from "localforage";
class MtmContent {
  constructor() { 
    this.data = ["","",0,1];
  }
  static setData(data){
    this.data = data;
  }
  static getData(){
    return this.data;
  }
 static getNewsData(f7,config,data){

        f7.preloader.show();
        f7.request({
        url: config.data.url+config.data.url_news,
        cache: false,
        data:{
          title:data[0],
          date:data[1],
          categoryid:data[2],
          limit:config.data.news_limit,
          offset:data[3]
        },
        crossDomain: true,
        dataType: 'json',
        success: function(data,status,xhr){
            $('#social').append(data.html);

            var categoryHtml = '';
            var category;
            for (category of data.category) {
              categoryHtml += '<div class="'+category.color+' news-category" data-cat="'+category.uid+'"><span>'+category.title+'</span></div>';
            }
            $('#social-category').html(categoryHtml);

            jQuery('.news-link').on('click', function () {
                var newsUrl = jQuery(this).attr('data-url');
                localforage.setItem('news-detail-link', newsUrl);
            });
            jQuery('.news-category').on('click', function () {
                //console.log(jQuery(this).attr('data-cat'));
                $('#social').html("");
                let data = ["","",jQuery(this).attr('data-cat'),1];
                MtmContent.getNewsData(f7,config,data);
                MtmContent.setData(data);
            });
            if(data.show_more<=0){
              jQuery('#news-mehr-laden').hide();
            }
            else{
              jQuery('#news-mehr-laden').show();
            }
            f7.preloader.hide();

          },
          error: function(xhr,status){
            console.log('xhr: '+xhr);
            console.log('status: '+status);
          }
        });
  }
  contentPageMounted(f7,config){
      let data = ["","",0,1];
      MtmContent.setData(data);
      MtmContent.getNewsData(f7,config,data); 


      jQuery('#search_submit').on('click', function () {
          $('#social').html("");
          //console.log(jQuery('#search_text').val());
          let data = [jQuery('#search_text').val(),"",0,1];
          MtmContent.getNewsData(f7,config,data);
          MtmContent.setData(data);
      });
      jQuery('#news-mehr-laden').on('click', function () {
          let data = MtmContent.getData();
          data[3]++;
          //console.log(data);
          MtmContent.getNewsData(f7,config,data);
      }); 

      MtmOwlCarousel.loadOwlCarousel('.kader-module .link-tab-varient.var-1 .info-tab-link-carousel .owl-carousel');  
      // calender
      var NewsFilterCalendar = f7.calendar.create({
        inputEl: '#news-list-datepicker',
        on: {
          change: function (calendar, value) {
              $('#social').html("");
              var d = value[0];
              var day = d.getDate();
              var month = d.getMonth()+1;
              if(parseInt(month)<10){
                month="0"+month;
              }
              var year = d.getFullYear();
              var date = day+"."+month+"."+year;
             // console.log(date);
              let data = ["",date,0,1];
              MtmContent.getNewsData(f7,config,data);
              MtmContent.setData(data);
              NewsFilterCalendar.close()
          }
        }
      });
  }
}
var mtm = new MtmContent(); 
export default mtm;
