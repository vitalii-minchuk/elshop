
@@include('jquery-3.6.0.min.js');
@@include('slick.js');
@@include('jquery.magnific-popup.js');

$(function () {
  // up-btn
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $('#top-page-btn').fadeIn(700);
    } else {
      $('#top-page-btn').fadeOut(300);
    }
    if ($(window).scrollTop() > 1) {
      $('#header').addClass('header__fixed-header');
      $('#header-block').addClass('header-block--show');
    } else {
      $('#header').removeClass('header__fixed-header');
      $('#header-block').removeClass('header-block--show');
    }
  });

  $("#top-page-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false
  });
  // slider main
  $('.index-slider__wrapper-bg').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  // slider vertical
  $('.full-item__slider-mini').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.full-item__slider-full',
    arrows: true,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
  });

  $('.full-item__slider-full').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.full-item__slider-mini',
    verticalSwiping: true,
    centerMode: false,
    fade: true,
  });
  // tabs
  $('.full-item__tabs-menu-link').on('click', function (e) {
    e.preventDefault();
    $('.full-item__tabs-menu-link').removeClass('full-item__tabs-menu-link--active');
    $('.full-item__tabs-cont').removeClass('full-item__tabs-cont--active');

    $(this).addClass('full-item__tabs-menu-link--active');
    $($(this).attr('href')).addClass('full-item__tabs-cont--active');

  });
  //view
  $('#top-settings-view1').on('click', function () {
    $(this).addClass('settings-active');
    $("#top-settings-view2").removeClass('settings-active');
    $("#item-normal-style").addClass('content-inner-hide');
    $("#item-list-style").removeClass('content-inner-hide');

  });

  $("#top-settings-view2").click(function () {
    $(this).addClass('settings-active');
    $("#top-settings-view1").removeClass('settings-active');
    $("#item-list-style").addClass('content-inner-hide');
    $("#item-normal-style").removeClass('content-inner-hide');
  });
  // slider compare
  $('.compare-page__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    isfinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
  // slider-user-order
  $('.user-order-list__item-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  });
  // slider my-reviews
  $('.my-reviews__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

  });
  // cell correction
  function cellsResize() {
    let lineNum = $('.line-num');
    let itmTable;
    let arr = [];
    let maxHeight;
    let getHeight;
    for (let i = 0; i < lineNum.length; i++) {
      itmTable = $('.itm-' + i);
      for (let j = 0; j < itmTable.length; j++) {
        getHeight = itmTable.eq(j).height();
        arr[j] = getHeight;
      }
      maxHeight = Math.max.apply(null, arr) + 24;
      itmTable.css({ "height": maxHeight + 'px' });
    }
  }
  cellsResize();
  // open instal__table
  $('.instal__table-category').hide();
  $('.instal__table-open-category').click(function () {
    $(this).toggleClass('open-category-active');
    $(this).next('.instal__table-category').slideToggle();
  })
  // open category-filter
  $('.category-filter__mini-box').hide();
  $('.category-filter__name').click(function () {
    $(this).toggleClass('category-filter__name--active');
    $(this).next('.category-filter__mini-box').slideToggle();
  })
  // open category-pages
  $('.category-page__content-top-settings-pages-window').hide();
  $('.category-page__content-top-settings-pages').click(function () {
    $(this).children('.category-page__content-top-settings-pages-window').slideToggle('fast');
  })

  $(document).mouseup(function (e) {
    let container = $(".category-page__content-top-settings-pages");
    if (!container.is(e.target)
      && container.has(e.target).length === 0) {
      $(".category-page__content-top-settings-pages").children('.category-page__content-top-settings-pages-window').hide();
    }
  });
  // open category-opt
  $('.category-page__content-top-settings-opt-window').hide();
  $('.category-page__content-top-settings-opt').click(function () {
    $(this).children('.category-page__content-top-settings-opt-window').slideToggle('fast');
    $(this).toggleClass('category-page__content-top-settings-opt--active');
  })

  $(document).mouseup(function (e) {
    let container = $(".category-page__content-top-settings-opt");
    if (!container.is(e.target)
      && container.has(e.target).length === 0) {
      $(".category-page__content-top-settings-opt").children('.category-page__content-top-settings-opt-window').hide();
      $(".category-page__content-top-settings-opt").removeClass('category-page__content-top-settings-opt--active');

    }
  });
  // open user
  $('.header__top-user-box-open').hide();
  $('.header__top-user-box').click(function (evt) {
    evt.preventDefault();
    $(this).next('.header__top-user-box-open').slideToggle('fast');
  })

  $(document).mouseup(function (e) {
    let container = $(".header__top-user-box-open");
    let box = $('.header__top-user-box');
    if (!container.is(e.target)
      && container.has(e.target).length === 0
      && box.has(e.target).length === 0) {
      $(".header__top-user-box-open").hide();
    }
  });
  // open cart
  $('.cart-open').hide();
  $('.cart').hover(function (evt) {
    evt.preventDefault();
    $(this).children('.cart-open').show();
  })

  $(document).mouseout(function (e) {
    let container = $(".cart-open");
    let box = $('.cart');
    if (!container.is(e.target)
      && container.has(e.target).length === 0
      && box.has(e.target).length === 0) {
      $(".cart-open").hide();
    }
  });
  // open full-item
  $('.full-item__serv-ditails-wrapper').hide();
  $('.full-item__serv-ditails-top').click(function () {
    $(this).children('.full-item__serv-ditails-title').toggleClass('full-item__serv-ditails-title--active');
    $(this).next('.full-item__serv-ditails-wrapper').slideToggle();
  })
  // open all
  $('#header-navi').hide();
  $(".header__bottom-all2").click(function (evt) {
    evt.preventDefault();
    $('.header-navi__cont-box').hide();
    $('.header-navi__cont-box--1').show();
    $("#header-navi").slideToggle();
    $(this).toggleClass("header__bottom-all2--active")
    $("body").toggleClass("example");
    $(".header__fixed-header").toggleClass("exam");
  });

  let boxNum;
  $(".header-navi__item-link").hover(function () {
    $('.header-navi__cont-box').hide();
    boxNum = $(this).attr("data-attribute");
    $('.header-navi__cont-box--' + boxNum).show()
  });
  // range slider
  $(function () {
    var $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min = 0,
      max = 100000,
      from = 0,
      to = 0;

    $range.ionRangeSlider({
      skin: "round",
      type: "double",
      min: min,
      max: max,
      from: 2000,
      to: 25000,
      onStart: updateInputs,
      onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
      from = data.from;
      to = data.to;

      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
      var val = $(this).prop("value");

      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance.update({
        from: val
      });
    });

    $inputTo.on("input", function () {
      var val = $(this).prop("value");

      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance.update({
        to: val
      });
    });

  });
  // popup
  $('.popup-open-model').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade',
    removalDelay: 300,
  });

  $('.ajax-popup-link').magnificPopup({
    type: 'ajax',
    ajax: {
      settings: null,
    
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.'
    }
  });
  // sms
  $('.user-popup__input-sms').keyup(function () {
    if ($(this).val().length == '1') {
      $(this).next('.user-popup__input-sms').focus();
    } else if ($(this).val().length == '0') {
      $(this).prev('.user-popup__input-sms').focus();
    } else {
      $(this).val($(this).val().replace(/[0-9]/, ''));
    }
  });
  // scroll
  $(".full-item__desc-link").click(function () {
    $('html, body').stop().animate({
      scrollTop: $("#scroll-tabs").offset().top - 190
    }, 400);
  });
  // like

  function activeItemClick(clickItem) {
    console.log(222)
    if ($(clickItem).children(".goods__item-img-box").children(".goods__item-like").children(".goods__item-like-icon-heart").hasClass("goods__item-like-icon-heart-active") ||
      $(clickItem).children(".goods__item-img-box").children(".goods__item-like").children(".goods__item-like-icon-compare").hasClass("goods__item-like-icon-compare-active")) {
      $(clickItem).addClass("goods__item-active");
      console.log(22)
    } else {
      $(clickItem).removeClass("goods__item-active");
      console.log(2)
    }
  }

  $(".goods__item-like-icon-heart").on("click", function () {
    $(this).toggleClass("goods__item-like-icon-heart-active");
    let clickItem = $(this).parent(".goods__item-like").parent(".goods__item-img-box").parent(".goods__item");
    activeItemClick(clickItem)
  })

  $(".goods__item-like-icon-compare").on("click", function () {
    $(this).toggleClass("goods__item-like-icon-compare-active");
    let clickItem = $(this).parent(".goods__item-like").parent(".goods__item-img-box").parent(".goods__item");
    activeItemClick(clickItem);
  })

});