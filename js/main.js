$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu__btn, .menu__list').toggleClass('menu__list--active');
  });

  $('.delivery__filters-btn').on('click', function () {
    $('.delivery__filters').slideToggle();
  });

  $('.menu-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.menu-tabs__top-item').removeClass('menu-tabs__top-item--active');
    $(this).addClass('menu-tabs__top-item--active');

    $('.menu-tabs__content-inner').removeClass('menu-tabs__content-inner--active');
    $($(this).attr('href')).addClass('menu-tabs__content-inner--active');
  });


  $('.menu-page__tabs-item').on('click', function (e) {
    e.preventDefault();
    $('.menu-page__tabs-item').removeClass('menu-page__tabs-item--active');
    $(this).addClass('menu-page__tabs-item--active');

    $('.menu-page__tabs-content').removeClass('menu-page__tabs-content--active');
    $($(this).attr('href')).addClass('menu-page__tabs-content--active');
  });



  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/arrow-next.svg" alt="стрілка вліво"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/arrow-prev.svg" alt="стрілка направо"></button>',

  });


  $('.reviews-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/arrow-next.svg" alt="стрілка вліво"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/arrow-prev.svg" alt="стрілка направо"></button>',

  });


  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 0,
      mobile: true,
      live: true
    }
  )
  wow.init();


  $('.filters-price__form-input').ionRangeSlider({
    type: "double",
    prefix: 'грн.',
    onStart: function (data) {
      $('.filters-price__from').text(data.from);
      $('.filters-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filters-price__from').text(data.from);
      $('.filters-price__to').text(data.to);
    },
  })




});




