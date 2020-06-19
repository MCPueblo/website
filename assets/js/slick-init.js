$(document).ready(function(){
    $('.text-slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 3,
      swipeToSlide: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 736,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 2,
          }
        }
      ]
    });
  });