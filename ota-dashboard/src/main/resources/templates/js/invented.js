"use strict";
$(document).ready(function (a) {

  $('.hamburger-menu').click(function(){
    $('.hamburger-menu').toggleClass('collapsed');
    $('#foo').slideToggle('slow', function(){
      console.log($(this).css('display'));
      if($(this).css('display').toLowerCase() == 'none'){
        $(this).css('display', '');
      }else{
        $(this).css('display', 'flex');
      }
    });
  });

  // accordion script start

    $(".set > a").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".content")
          .slideUp(200);
        $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      } else {
        $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
        $(this)
          .find("i")
          .removeClass("fa-plus")
          .addClass("fa-minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
          .siblings(".content")
          .slideDown(200);
      }
    });

$(function() {
  var x =location.pathname.split("/")
  // console.log(x);
  if(x[1]==='')
  {
    $('nav a[href="/"]').addClass('active');
  }
  else{
    $('nav a[href="/' +x[1]+ '"]').addClass('active');
  }
});


$("#contact-form").click(function() {
  $('#exampleModal').modal('hide');
  $('html, body').animate({
      scrollTop: $("#enrollwithus").offset().top
  }, 1000);
});



wordflick();
  
  function e() {
    a("[data-animate-css]").each(function () {
      a(this).is(":in-viewport") &&
        a(this).each(function () {
          a(this).css(
            "animation-delay",
            a(this).attr("data-animate-css-delay")
          ),
            a(this).addClass("animated " + a(this).attr("data-animate-css")),
            a(this).css("visibility", "visible");
        });
    });
  }
  
   
  
   
    a(".ogmen-robot-info__slider").slick({
      dots: !1,
      arrows: !0,
      infinite: !1,
      fade: !0,
      speed: 500,
      slidesToShow: 1,
      autoplay: !0,
      autoplaySpeed: 8e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      cssEase: "ease-in-out",
      asNavFor: ".ogmen-robot-info__background-slider",
      prevArrow: a(".ogmen-robot-info__slide-prev"),
      nextArrow: a(".ogmen-robot-info__slide-next"),
      responsive: [
        { breakpoint: 767, settings: { arrows: !1, dots: !0, infinite: !0 } },
      ],
    }),
    a(".ogmen-robot-info__slider").on("touchstart", function (e) {
      a(".ogmen-robot-info__slider").slick("slickPlay");
    }),
    a(".ogmen-robot-info__background-slider").slick({
      slidesToShow: 1,
      infinite: !1,
      arrows: !1,
      dots: !1,
      fade: !0,
      asNavFor: ".ogmen-robot-info__slider",
      autoplay: !0,
      speed: 500,
      autoplaySpeed: 8e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      cssEase: "ease-in-out",
    }),
   
    
   
   
    a(window).scroll(function () {
      a(".hood-section-info").is(":in-viewport") &&
        (a(".hood-section-info__image-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          arrows: !1,
          fade: !0,
          autoplay: !0,
          asNavFor: ".hood-section-info__slider",
          speed: 500,
          autoplaySpeed: 7e3,
          cssEase: "ease-in-out",
        }),
        a(".hood-section-info__slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !1,
          infinite: !0,
          dots: !0,
          vertical: !0,
          autoplay: !0,
          verticalSwiping: !0,
          focusOnSelect: !0,
          speed: 500,
          autoplaySpeed: 7e3,
          asNavFor: ".hood-section-info__image-slider",
          responsive: [
            {
              breakpoint: 1300,
              settings: {
                vertical: !1,
                verticalSwiping: !1,
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
         
            {
              breakpoint: 991,
              settings: {
                vertical: !1,
                verticalSwiping: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }));
    }),

   a(window).scroll(function () {
      a(".hood-section-info").is(":in-viewport") &&
        (a(".hood-section-info__image-slider-feeder").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          arrows: !1,
          fade: !0,
          autoplay: !0,
          asNavFor: ".hood-section-info__slider-feeder",
          speed: 500,
          autoplaySpeed: 7e3,
          cssEase: "ease-in-out",
        }),
        a(".hood-section-info__slider-feeder").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !1,
          infinite: !0,
          dots: !0,
          vertical: !0,
          autoplay: !0,
          verticalSwiping: !0,
          focusOnSelect: !0,
          speed: 500,
          autoplaySpeed: 7e3,
          asNavFor: ".hood-section-info__image-slider-feeder",
          responsive: [

            {
              breakpoint: 1300,
              settings: {
                vertical: !1,
                verticalSwiping: !1,
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
         
            {
              breakpoint: 991,
              settings: {
                vertical: !1,
                verticalSwiping: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }));
    }),
    a(".leader-block__slider").slick({
      dots: !1,
      infinite: !1,
      speed: 1e3,
      slidesToShow: 1,
      autoplay: !1,
      autoplaySpeed: 2e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      appendArrows: ".leader-block__slide-arrow",
      prevArrow:
        '<button type="button" class="leader-block__slide-prev"><svg class="icon icon-circle-left-arrow"><use xlink:href="#icon-circle-left-arrow"></use></svg></button>',
      nextArrow:
        '<button type="button" class="leader-block__slide-next"><svg class="icon icon-circle-right-arrow"><use xlink:href="#icon-circle-right-arrow"></use></svg></button>',
    }),
    a(".leader-block__video:last-child").hide(),
    a(".leader-block__slider").on("afterChange", function (e, i, t, s) {
      0 == t
        ? (a(".leader-block__video:first-child").show(),
          a(".leader-block__video:last-child").hide())
        : (a(".leader-block__video:first-child").hide(),
          a(".leader-block__video:last-child").show());
    }),
    a(".carousel-block__slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: !0,
      infinite: !1,
      dots: !1,
      autoplay: !1,
      speed: 1e3,
      autoplaySpeed: 2e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      prevArrow:
        '<button type="button" class="carousel-block__slide-prev"><svg class="icon icon-circle-left-arrow"><use xlink:href="#icon-circle-left-arrow"></use></svg></button>',
      nextArrow:
        '<button type="button" class="carousel-block__slide-next"><svg class="icon icon-circle-right-arrow"><use xlink:href="#icon-circle-right-arrow"></use></svg></button>',
      responsive: [
        { breakpoint: 1100, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            arrows: !1,
            dots: !0,
            centerMode: !0,
            centerPadding: "150px",
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            arrows: !1,
            dots: !0,
            centerMode: !0,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            arrows: !1,
            dots: !0,
            centerMode: !0,
            centerPadding: "50px",
          },
        },
      ],
    });
  function i() {
    if (a(window).width() < 768 && !t)
      return (
        (t = !0),
        a("table.responsive").each(function (e, i) {
          !(function (e) {
            e.wrap("<div class='table-wrapper' />");
            var i = e.clone();
            i
              .find("td:not(:first-child), th:not(:first-child)")
              .css("display", "none"),
              i.removeClass("responsive"),
              e.closest(".table-wrapper").append(i),
              i.wrap("<div class='pinned' />"),
              e.wrap("<div class='scrollable' />"),
              (function (e, i) {
                var t = e.find("tr"),
                  s = i.find("tr"),
                  o = [];
                t.each(function (i) {
                  a(this)
                    .find("th, td")
                    .each(function () {
                      var e = a(this).outerHeight(!0);
                      (o[i] = o[i] || 0), e > o[i] && (o[i] = e);
                    });
                }),
                  s.each(function (e) {
                    a(this).height(o[e]);
                  });
              })(e, i);
          })(a(i));
        }),
        !0
      );
    t &&
      768 < a(window).width() &&
      ((t = !1),
      a("table.responsive").each(function (e, i) {
        var t;
        (t = a(i)).closest(".table-wrapper").find(".pinned").remove(),
          t.unwrap(),
          t.unwrap();
      }));
  }
  var t = !1;
  if (
    (a(window).on("load", i),
    a(window).on("redraw", function () {
      (t = !1), i();
    }),
    a(window).on("resize", i),
    0 < a(".sticky-nav").length)
  ) {
    var s = window.innerHeight;
    a("body").scrollspy({ target: ".sticky-nav", offset: s });
    var o = a(".sticky-nav").offset().top;
    a(window).scroll(function () {
      a(window).scrollTop() >= o
        ? a(".sticky-nav").addClass("fixed")
        : a(".sticky-nav").removeClass("fixed");
    });
  }
  0 < a(".filter-option__mobile-nav").length &&
    a(window).on("load resize", function () {
      var t = a(".filter-option__mobile-nav"),
        s = a(t).offset().top;
      a(window).on("scroll load resize", function () {
        var e = a(t).innerHeight();
        if (a(window).scrollTop() >= s) {
          a(".filter-option__mobile-nav").addClass("fixed");
          var i = a(".top-bar").outerHeight();
          a(".header").outerHeight();
          a(".filter-option__mobile-nav").css({ top: i }),
            a(".review-card__wrap").css("margin-top", e + "px");
        } else a(".filter-option__mobile-nav").removeClass("fixed"), a(".review-card__wrap").css("margin-top", 0), a(".filter-option__mobile-nav").css({ top: 0 });
      });
    }),
    a("a.scroll-to-section")
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (e) {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var i = a(this.hash);
          (i = i.length ? i : a("[name=" + this.hash.slice(1) + "]")).length &&
            (e.preventDefault(),
            a("html, body").animate(
              { scrollTop: i.offset().top },
              1e3,
              function () {
                var e = a(i);
                if ((e.focus(), e.is(":focus"))) return !1;
                e.attr("tabindex", "-1"), e.focus();
              }
            ));
        }
      });
  if (
    (a(".faq-block__item p").each(function () {
      var e = a(this).html();
      if (125 < a.trim(e).length) {
        var i = e.substring(0, 125),
          t = e.substring(125, a.trim(e).length);
        a(this).empty().html(i),
          a(this).append('<span class="more-dot">...</span>'),
          a(this).append('<span class="more-text">' + t + "</span>");
      }
    }),
    a(".faq-block__item h3").click(function () {
      a(this).parent().toggleClass("faq-block__item--is-active"),
        a(this).parent().hasClass("faq-block__item--is-active")
          ? (a(this).next().children(".more-dot").remove(),
            a(this).next().children(".more-text").show())
          : a(this).next().children(".more-text").hide();
    }),
    0 < a(".ogmen-product-info__list-item").length &&
      0 < a(window).width() &&
      (a(
        ".ogmen-product-info__list-item:not(.ogmen-product-info__list-item--is-active) .product-card"
      ).slideUp(),
      a(".ogmen-product-info__list-item").click(function () {
        var e = a(this).index();
        a(this).siblings().removeClass("ogmen-product-info__list-item--is-active"),
          a(this).addClass("ogmen-product-info__list-item--is-active"),
          a(this).siblings().find(".product-card").slideUp(),
          a(this).find(".product-card").slideDown(),
          a(".image-list__item")
            .siblings()
            .removeClass("image-list__item--is-active"),
          a(".image-list__item").eq(e).addClass("image-list__item--is-active"),
          a(".image-list__item--third img").css({ left: "0" }),
          setTimeout(function () {
            a(".image-list__item--third").children().animate({ left: "-70px" });
          }, 200);
      })),
    a(".filter-stats__slider").slick({
      dots: !1,
      arrows: !0,
      infinite: !1,
      speed: 1e3,
      slidesToShow: 1,
      autoplay: !1,
      autoplaySpeed: 2e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      prevArrow:
        '<button type="button" class="filter-stats__slide-prev"><svg class="icon icon-circle-left-arrow"><use xlink:href="#icon-circle-left-arrow"></use></svg></button>',
      nextArrow:
        '<button type="button" class="filter-stats__slide-next"><svg class="icon icon-circle-right-arrow"><use xlink:href="#icon-circle-right-arrow"></use></svg></button>',
    }),
    0 < a(".trigger-info").length &&
      a(".trigger-info").on("click", function (e) {
        e.preventDefault(),
          a(this)
            .parent()
            .next(".info-text")
            .toggleClass("info-text--is-active"),
          "#icon-info" == a(this).find("use").attr("xlink:href")
            ? a(this).find("use").attr("xlink:href", "#icon-info-fill")
            : a(this).find("use").attr("xlink:href", "#icon-info");
      }),
    a(".filter-feature__image-slider").slick({
      slidesToShow: 1,
      arrows: !0,
      infinite: !0,
      fade: !0,
      asNavFor: ".filter-feature__slider",
      speed: 1e3,
      autoplay: !1,
      autoplaySpeed: 2e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      prevArrow:
        '<button type="button" class="filter-feature__slide-prev"><svg class="icon icon-circle-left-arrow"><use xlink:href="#icon-circle-left-arrow"></use></svg></button>',
      nextArrow:
        '<button type="button" class="filter-feature__slide-next"><svg class="icon icon-circle-right-arrow"><use xlink:href="#icon-circle-right-arrow"></use></svg></button>',
      responsive: [{ breakpoint: 767, settings: { arrows: !1 } }],
    }),
    a(".filter-feature__icon-button a").on("click", function (e) {
      e.preventDefault(),
        a(".filter-feature__icon-button a.active").removeClass("active"),
        a(this).addClass("active");
      var i = a(this).data("target");
      a(".filter-feature__slider").slick("slickGoTo", i),
        a(".filter-feature__image-slider").slick("slickGoTo", i);
    }),
    a(".filter-feature__slider").slick({
      dots: !1,
      arrows: !1,
      speed: 1e3,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: !1,
      autoplaySpeed: 2e3,
      centerMode: !0,
      centerPadding: "300px",
      pauseOnHover: !1,
      pauseOnFocus: !1,
      focusOnSelect: !0,
      asNavFor: ".filter-feature__image-slider",
      responsive: [
        { breakpoint: 1441, settings: { centerPadding: "200px" } },
        { breakpoint: 767, settings: { dots: !0, centerPadding: "100px" } },
        { breakpoint: 500, settings: { dots: !0, centerPadding: "50px" } },
      ],
    }),
    a(".filter-detail__image-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
      infinite: !0,
      fade: !0,
      asNavFor: ".filter-detail__slider",
      speed: 1e3,
      autoplay: !1,
      autoplaySpeed: 2e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      prevArrow:
        '<button type="button" class="filter-detail__slide-prev"><svg class="icon icon-circle-left-arrow"><use xlink:href="#icon-circle-left-arrow"></use></svg></button>',
      nextArrow:
        '<button type="button" class="filter-detail__slide-next"><svg class="icon icon-circle-right-arrow"><use xlink:href="#icon-circle-right-arrow"></use></svg></button>',
      responsive: [{ breakpoint: 767, settings: { arrows: !1 } }],
    }),
    a(".filter-detail__slider").slick({
      dots: !1,
      arrows: !1,
      speed: 1e3,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: !1,
      autoplaySpeed: 2e3,
      centerMode: !0,
      centerPadding: "300px",
      pauseOnHover: !1,
      pauseOnFocus: !1,
      focusOnSelect: !0,
      asNavFor: ".filter-detail__image-slider",
      responsive: [
        { breakpoint: 1441, settings: { centerPadding: "200px" } },
        { breakpoint: 767, settings: { dots: !0, centerPadding: "50px" } },
      ],
    }),
    a(".filter-detail__slider").on("beforeChange", function (e, i, t, s) {
      a(".filter-detail__slide").siblings().show(),
        a(".filter-detail__slider").removeClass(
          "filter-detail__slider--has-detail"
        ),
        a(".filter-detail__secondary, .filter-detail__arrow").hide();
    }),
    0 < a(".filter-detail__slider").length &&
      (a("body").on("click", ".filter-detail__open-link", function () {
        a(this).closest(".filter-detail__slide").siblings().hide(),
          a(this)
            .closest(".filter-detail__slider")
            .addClass("filter-detail__slider--has-detail"),
          a(".filter-detail__secondary, .filter-detail__arrow").show();
      }),
      a("body").on(
        "click",
        ".filter-detail__image-slider .slick-arrow, .filter-detail__close-link, .filter-detail__slider .slick-dots button",
        function () {
          a(".filter-detail__slide").siblings().show(),
            a(".filter-detail__slider").removeClass(
              "filter-detail__slider--has-detail"
            ),
            a(".filter-detail__secondary, .filter-detail__arrow").hide();
        }
      )),
    a(".filter-card__slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: !0,
      dots: !1,
      infinite: !0,
      autoplay: !1,
      speed: 1e3,
      autoplaySpeed: 2e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      draggable: !1,
      prevArrow:
        '<button type="button" class="filter-card__slide-prev"><svg class="icon icon-circle-left-arrow"><use xlink:href="#icon-circle-left-arrow"></use></svg></button>',
      nextArrow:
        '<button type="button" class="filter-card__slide-next"><svg class="icon icon-circle-right-arrow"><use xlink:href="#icon-circle-right-arrow"></use></svg></button>',
      responsive: [
        { breakpoint: 1100, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: !0,
            arrows: !1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !0,
            arrows: !1,
          },
        },
      ],
    }),
    0 < a(".popup-trigger").length &&
      a(".popup-trigger").fancybox({
        closeExisting: !0,
        loop: !0,
        touch: !1,
        afterShow: function () {
          a(".filter-feature__image-slider").slick("refresh"),
            a(".filter-feature__slider").slick("refresh"),
            a(".filter-detail__image-slider").slick("refresh"),
            a(".filter-detail__slider").slick("refresh"),
            a(".filter-card__slider").slick("refresh");
        },
      }),
    0 < a(".inline-dropdown__selected").length &&
      (a(".inline-dropdown__selected").on("click", function (e) {
        e.preventDefault(),
          a(this)
            .next(".inline-dropdown__list")
            .toggleClass("inline-dropdown__list--is-active");
      }),
      a(".inline-dropdown__list-item").on("click", function (e) {
        var i = a(this).text();
        a(".inline-dropdown__list-item").removeClass("selected"),
          a(this).addClass("selected"),
          a(".inline-dropdown__list-item.selected").parent().prepend(this),
          a(this)
            .closest(".inline-dropdown")
            .find(".inline-dropdown__selected span")
            .text(i),
          a(this)
            .closest(".inline-dropdown")
            .find(".inline-dropdown__list")
            .removeClass("inline-dropdown__list--is-active"),
          a(".table-item").hide();
        var t = a(".inline-dropdown__list-item.selected").text().toLowerCase();
        a("." + t).show();
      })),
    0 < a(".filter-order__button .btn--order").length &&
      a(".filter-order__button .filter-order__button-close").on(
        "click",
        function (e) {
          e.preventDefault(), parent.$.fancybox.close();
        }
      ),
    0 < a(".row-value__dropdown").length &&
      (a(".row-value__dropdown-trigger").on("click", function (e) {
        e.preventDefault(),
          a(this).toggleClass("row-value__dropdown-trigger--is-active"),
          a(this)
            .next(".row-value__dropdown-list")
            .toggleClass("row-value__dropdown-list--is-active");
      }),
      a(".row-value__dropdown-item").on("click", function (e) {
        var i = a(this).html();
        a(".row-value__dropdown-item").removeClass("selected"),
          a(this).addClass("selected"),
          a(this)
            .closest(".row-value__dropdown")
            .find(".row-value__dropdown-trigger span")
            .html(i),
          a(this)
            .closest(".row-value__dropdown")
            .find(".row-value__dropdown-trigger")
            .removeClass("row-value__dropdown-trigger--is-active"),
          a(this)
            .closest(".row-value__dropdown")
            .find(".row-value__dropdown-list")
            .removeClass("row-value__dropdown-list--is-active");
        var t = a(this).attr("id").split("__").pop();
        a(".row-value").each(function (e) {
          var i = a(this).data(t);
          1 == a(this).find(".card-value").length
            ? a(this).children(".card-value").text(i)
            : a(this).text(i);
        });
      })),
    0 < a(".row-toggle__trigger").length &&
      a(".row-toggle__trigger").on("click", function () {
        a(this).toggleClass("row-toggle__trigger--active"),
          a(this).hasClass("row-toggle__trigger--active")
            ? (a(".row-toggle").toggle(),
              a(this).find(".row-label__button").text("âˆ’ Less"))
            : (a(".row-toggle").toggle(),
              a(this).find(".row-label__button").text("+ More"));
      }),
    0 < a(".nested-accordion").length)
  ) {
    var l = a(".nested-accordion"),
      r = l.find("dt");
    l.find("dd").hide(),
      r.on("click", function () {
        var e = a(this),
          i = e.next();
        e.next("dd").slideToggle("slow"),
          e.toggleClass("active"),
          e.siblings("dd").not(i).slideUp(),
          e.siblings("dt").removeClass("active");
      });
  }
  if (
    (a(".install-block__image-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      dots: !1,
      fade: !0,
      asNavFor: ".install-block__card-slider",
      autoplay: !1,
      speed: 1e3,
      autoplaySpeed: 2e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
    }),
    a(".install-block__card-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: !1,
      dots: !1,
      vertical: !0,
      verticalSwiping: !0,
      autoplay: !1,
      speed: 1e3,
      autoplaySpeed: 2e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      focusOnSelect: !0,
      asNavFor: ".install-block__image-slider",
      responsive: [
        { breakpoint: 1024, settings: { vertical: !1, verticalSwiping: !1 } },
        {
          breakpoint: 767,
          settings: {
            vertical: !1,
            verticalSwiping: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 550,
          settings: {
            vertical: !1,
            verticalSwiping: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: "25px",
          },
        },
      ],
    }),
    0 < a(".change-log__inner").length &&
      a(".change-log__trigger").on("click", function (e) {
        e.preventDefault(),
          a(this).toggleClass("change-log__trigger--is-active"),
          a(this).next(".change-log__inner").stop().slideToggle();
      }),
    a(".unit-slider").slick({
      slidesToShow: 1,
      arrows: !0,
      dots: !1,
      infinite: !1,
      fade: !0,
      speed: 1e3,
      autoplay: !0,
      autoplaySpeed: 2e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      prevArrow:
        '<button type="button" class="unit-slider__slide-prev"><svg class="icon icon-circle-left-arrow"><use xlink:href="#icon-circle-left-arrow"></use></svg></button>',
      nextArrow:
        '<button type="button" class="unit-slider__slide-next"><svg class="icon icon-circle-right-arrow"><use xlink:href="#icon-circle-right-arrow"></use></svg></button>',
    }),
    0 < a(".header").length && a(".top-bar").length)
  ) {
    var n = a(".top-bar").outerHeight(),
      c = n + a(".header").outerHeight();
    a(".header, .sticky-nav").css({ top: n }),
      a(".main").css({ "padding-top": c }),
      a(window).scroll(function () {
        230 < a(document).scrollTop()
          ? a(".header").addClass("header--fixed")
          : a(".header").removeClass("header--fixed");
      }),
      a(window).on("resize load", function () {
        var e = a(".top-bar").outerHeight(),
          i = e + a(".header").outerHeight();
        a(".header, .sticky-nav").css({ top: e }),
          a(".main").css({ "padding-top": i });
      });
  }
  if (
    (0 < a(".nav-block__toggle").length &&
      a(".nav-block__toggle").on("click", function (e) {
        e.preventDefault(),
          a(this).toggleClass("nav-block__toggle--is-active"),
          a(this).next().toggleClass("section-nav--is-active"),
          a(".sticky-nav").toggleClass("sticky-nav--is-open");
      }),
    0 < a(".filter-page .section-nav__item").length &&
      a(".filter-page .section-nav__item a").on("click", function (e) {
        e.preventDefault(),
          a(".nav-block__toggle").removeClass("nav-block__toggle--is-active"),
          a(".section-nav").removeClass("section-nav--is-active"),
          a(".sticky-nav").removeClass("sticky-nav--is-open");
      }),
    a(".sticky-nav").on("activate.bs.scrollspy", function () {
      var e = a(".filter-page .section-nav__item.active a").text();
      a(".nav-block__active-text").text(e);
    }),
    0 < a(".filter-page, .wall-of-love").length)
  ) {
    var d = document.body,
      p = "scroll-up",
      _ = "scroll-down",
      u = 0;
    window.addEventListener("scroll", function () {
      var e = window.pageYOffset;
      0 != e
        ? (u < e && !d.classList.contains(_)
            ? (d.classList.remove(p), d.classList.add(_))
            : e < u &&
              d.classList.contains(_) &&
              (d.classList.remove(_), d.classList.add(p)),
          (u = e))
        : d.classList.remove(p);
    });
  }
  if (0 < a(".lazy").length) new LazyLoad({});
  if (
    ((0 < a("#mila-video").length ||
      0 < a("#feature-block__slider-video").length) &&
      ((document.getElementById("mila-video").controls = !1),
      (document.getElementById("feature-block__slider-video").controls = !1)),
    0 < a("#media-block__slider-video").length &&
      (document.getElementById("media-block__slider-video").controls = !1),
    0 < a(".review-card__wrap").length)
  ) {
    var h = a(".review-card__wrap");
    h.imagesLoaded(function () {
      h.masonry({
        columnWidth: ".grid-sizer",
        gutter: 55,
        itemSelector: ".grid-item",
      });
    });
  }
  var g,
    f,
    v = a(".filter-option__item"),
    w = a(".review-card__item"),
    b = a(".client-quote"),
    k = a(".showAll"),
    m = [];
  v.click(function () {
    var e;
    (g = a(this)),
      (f = g.attr("data-filter")),
      (e = "filter-option__item--active"),
      g.hasClass(e)
        ? (g.removeClass(e),
          (function (e) {
            var i = m.indexOf(e);
            -1 < i && m.splice(i, 1);
          })(f))
        : g.hasClass("showAll")
        ? (v.removeClass(e), (m = []), g.addClass(e))
        : (k.removeClass(e), g.addClass(e), m.push(f)),
      w.each(function () {
        var e,
          i = a(this).attr("class").split(" ");
        if (g.hasClass("showAll") || 0 == m.length)
          w.addClass("review-card__item--show-item");
        else
          for (
            a(this).removeClass("review-card__item--show-item"), e = 0;
            e < i.length;
            e++
          )
            -1 < m.indexOf(i[e]) &&
              a(this).addClass("review-card__item--show-item");
      }),
      b.each(function () {
        var e,
          i = a(this).attr("class").split(" ");
        if (g.hasClass("showAll") || 0 == m.length)
          b.addClass("client-quote--show-item");
        else
          for (
            a(this).removeClass("client-quote--show-item"), e = 0;
            e < i.length;
            e++
          )
            -1 < m.indexOf(i[e]) && a(this).addClass("client-quote--show-item");
      }),
      h.masonry("layout");
  }),
    0 < a(".filter-option").length &&
      a(".filter-option a").on("click", function (e) {
        a(".filter-option a").each(function () {
          a(".filter-option a").hasClass("filter-option__item--active")
            ? a(".filter-option").addClass("filter-option--selected")
            : a(".filter-option").removeClass("filter-option--selected");
        });
      }),
    0 < a(".filter-option__toggle").length &&
      a(".filter-option__toggle").on("click", function (e) {
        e.preventDefault(),
          a(this).toggleClass("active"),
          a(this).next(".filter-option__mobile").toggleClass("active");
      }),
    0 < a(".filter-option__mobile-item").length &&
      a(".filter-option__mobile-item").on("click", function (e) {
        e.preventDefault(),
          a(".filter-option__mobile, .filter-option__toggle").toggleClass(
            "active"
          ),
          a(".filter-option__toggle").addClass("selected"),
          a(".filter-option__mobile-item").removeClass("selected-item"),
          a(this).addClass("selected-item");
        var i = a(this).index();
        a(".filter-option__item--active").click(),
          a(".filter-option__item").eq(i).click();
        var t = a(this).html();
        a(".filter-option__active-tab").html(t),
          a(".filter-option__mobile .showAll").addClass("show-filter");
      }),
    0 < a(".filter-option").length &&
      a(".filter-option").stick_in_parent({ offset_top: 140 });
}),
  $(window).on("load", function () {
    if (
      ($(".ogmen-product-info__list").each(function () {
        var e = $(this);
        0 < $(window).width()
          ? e.hasClass("slick-initialized") && e.slick("unslick")
          : e.hasClass("slick-initialized") ||
            (e.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: !1,
              dots: !1,
              autoplay: 1,
              speed: 1e3,
              autoplaySpeed: 2e3,
              pauseOnHover: !1,
              pauseOnFocus: !1,
              focusOnSelect: !0,
              // responsive: [
              //   {
              //     breakpoint: 767,
              //     settings: { slidesToShow: 2, variableWidth: !0 },
              //   },
              //   {
              //     breakpoint: 600,
              //     settings: { slidesToShow: 1, variableWidth: !0 },
              //   },
              // ],
            }),
            e.on("afterChange", function (e, i, t, s) {
              var o = $(".ogmen-product-info__list-item.slick-current").attr(
                "data-slick-index"
              );
              $(".image-list__item")
                .siblings()
                .removeClass("image-list__item--is-active"),
                $(".image-list__item")
                  .eq(o)
                  .addClass("image-list__item--is-active");
            }));
      }),
      0 < $(".cart-trigger").length)
    ) {
      var e = $(".cart-trigger").children("span").text();
      $(".cart-trigger").on("click", function () {
        $("body").toggleClass("dropdown-overlay"),
          $(this).toggleClass("cart-trigger--is-active"),
          $(this).next().toggleClass("quick-cart__wrap--is-active"),
          $(this).hasClass("cart-trigger--is-active")
            ? $(this).children("span").text("Close")
            : $(this).children("span").text(e);
      });
    }
    if (
      ($(".review-column__grid-inner").slick({
        dots: !1,
        arrows: !1,
        speed: 1e3,
        autoplaySpeed: 6e3,
        slidesToShow: 3,
        pauseOnHover: !1,
        pauseOnFocus: !1,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          {
            breakpoint: 600,
            settings: { slidesToShow: 1, dots: !0, autoplay: !0 },
          },
        ],
      }),
      window.location.hash)
    ) {
      var i = window.location.hash;
      $(i).length &&
        $("html, body").animate(
          { scrollTop: $(i).offset().top - 140 },
          900,
          "swing"
        ),
        "#amazon-alexa" === i && $("#amazon-alexa").trigger("click"),
        "#google-home" === i && $("#google-home").trigger("click");
    }
  }),
  $(function () {
    $(".mc-subscribe-form").on("submit", function (e) {
      e.preventDefault();
      var i = $(this).serializeArray();
      $.ajax({
        url: "mailchimp/process/index.php",
        type: "POST",
        data: i,
      }).done(function (e) {
        $(".subscribe-block__form-message").remove(),
          $(".subscribe-block").append(
            '<p class="subscribe-block__form-message">' + e.message + "</p>"
          );
      });
    }),
      $(".read-more").on("click", function () {
        $(this).css({
          opacity: "0",
          "z-index": "-1",
          top: "100%",
          position: "absolute",
        }),
          $(".read-less").css({
            opacity: "1",
            position: "relative",
            "z-index": "1",
          }),
          $(".virus-billboard__hidden").slideDown(300);
      }),
      $(".review-slider").slick({
        dots: !0,
        arrows: !1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 5e3,
        pauseOnHover: !1,
        pauseOnFocus: !1,
        cssEase: "ease-in-out",
        centerMode: !0,
        centerPadding: "8%",
        responsive: [
          { breakpoint: 768, settings: { centerMode: !1, centerPadding: "" } },
        ],
      });
  });



  var words = ['diverse', 'unconventional', 'hands-on'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 110;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});



