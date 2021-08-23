"use strict"

let pageSlider = new Swiper ('.page', {

  wrapperClass: "content",
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
