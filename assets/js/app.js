
  $(".common").click(function(){
    $(".menu").toggleClass("open");
  })



// owl carosel service work section
$('.fadeOut').owlCarousel({
  items: 1,
  animateOut: 'fadeOut',
  loop: true,
  margin: 10,
  smartSpeed: 1000,
  dots : true,
  dotsData :true,
  // autoplay: true,
  autoplayTimeout : 2000,
  
});

// hannan miah
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

var swiper = new Swiper(".serviceSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  // speed: 1000,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    1199: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
},

});
 
