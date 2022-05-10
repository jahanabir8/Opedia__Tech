
  $(".common").click(function(){
    $(".menu").toggleClass("open");
  })
//   $(".cross__menu").click(function(){
//     $(".menu").removeClass("open animate__fadeInTopRight");
//   })



// owl carosel service work section
$('.fadeOut').owlCarousel({
  items: 1,
  animateOut: 'fadeOut',
  loop: true,
  margin: 10,
  smartSpeed: 1000,
  // autoplay: true,
  autoplayTimeout : 2000,
  URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
});
  
 
