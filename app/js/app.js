$(function () {

  $(".header__menu-btn").on("click", function () {
    $(".header__menu").addClass("open");
    $(".header__menu-shadow").addClass("open");
    $("body").addClass("lock");
  });

  $(".header__menu-close").on("click", function () {
    $(".header__menu").removeClass("open");
    $(".header__menu-shadow").removeClass("open");
    $("body").removeClass("lock");
  });

  $(".reviews__read").on("click", function () {
    $(this).parent().addClass("open");
  });

  $(".header__menu-shadow").on("click", function () {
    $(".header__menu").removeClass("open");
    $(".header__menu-shadow").removeClass("open");
    $("body").removeClass("lock");
  });

  $('.menu__right-slider').slick({
    infinite: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.reviews__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.info__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });







});