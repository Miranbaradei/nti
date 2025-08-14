  $(document).ready(function(){
  $('[data-slick]').slick();
});
$('[data-slick]').slick({
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>'
});


  $(document).ready(function(){
    $('.product-carousel').slick();
  });
document.addEventListener('DOMContentLoaded', function() {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const leftArrow = document.querySelector('.slider-arrow-left');
  const rightArrow = document.querySelector('.slider-arrow-right');
  const cardSlide = document.querySelector('.card-slide');

  const cardWidth = cardSlide.offsetWidth;

  
  leftArrow.addEventListener('click', function() {

    sliderWrapper.scrollBy({
      left: -cardWidth,
      behavior: 'smooth'
    });
  });

  rightArrow.addEventListener('click', function() {
    
    sliderWrapper.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
  });
  });
  $(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})