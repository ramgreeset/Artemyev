"use strict"

let pageSlider = new Swiper ('.page', {

  wrapperClass: "page__content",
  slideClass: "screen",

  direction: 'vertical',
  // slidesPerView: 'auto',
  parallax: true,
  mousewheel: {
    sensitivity: 1,
  },
  speed:1000,

  loop:true,
})
