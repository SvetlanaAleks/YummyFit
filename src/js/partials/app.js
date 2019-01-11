//Some JS
const App = (function () {
   "use strict";
   return {
      sliderResultInit: function () {
         $('.result__slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: "linear",
            prevArrow: '<div class="arr arr--left"><i class="fico fico-arrow"></i></div>',
            nextArrow: '<div class="arr arr--right"><i class="fico fico-arrow"></i></div>',
            autoplay: false,
            responsive: [{
               breakpoint: 768,
               settings: {
                  adaptiveHeight: true
               }
            }, ]
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
      init: function () {
         App.sliderResultInit();
         App.sliderReviewsInit();
      }
   };
})();