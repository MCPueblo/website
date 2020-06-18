$(document).ready(function(){
    $('.text-slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 3,
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
          breakpoint: 840,
          settings: {
            arrows: false,
          }
        }
      ]
    });
  });