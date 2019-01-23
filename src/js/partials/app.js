//Some JS
const App = (function () {
   "use strict";
   return {
      sliderResultInit: function () {
         $('.result__slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            cssEase: "linear",
            prevArrow: '<div class="arr arr--left"><i class="fico fico-arrow"></i></div>',
            nextArrow: '<div class="arr arr--right"><i class="fico fico-arrow"></i></div>',
            autoplay: false,
            responsive: [{
                  breakpoint: 1024,
                  settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                  }
               },
               {
                  breakpoint: 768,
                  settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                  }
               },
               {
                  breakpoint: 640,
                  settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                  }
               }
            ]
         });
      },
      sliderReviewsInit: function () {
         $('.reviews__slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: "linear",
            prevArrow: '<div class="arr arr--left"><i class="fico fico-arrow"></i></div>',
            nextArrow: '<div class="arr arr--right"><i class="fico fico-arrow"></i></div>',
            autoplay: false,
            adaptiveHeight: true,
            responsive: [{
               breakpoint: 768,
               settings: {
                  adaptiveHeight: true
               }
            }, ]
         });
      },
      scrollToNextSection: function () {
         $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
               scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
         });
      },
      init: function () {
         App.sliderResultInit();
         App.sliderReviewsInit();
         App.scrollToNextSection();
      }
   };
})();