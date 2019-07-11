import Swiper from 'swiper';


export default function(){

    var mySwiper = new Swiper ('.swiper-container', {

        loop: true,
        slidesPerView: 3,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },

        // breakpointsInverse: true,
        breakpoints: {
          // when window width is >= 320px
          800: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          1200: {
            slidesPerView: 2,
          }
        }
    
    })
};