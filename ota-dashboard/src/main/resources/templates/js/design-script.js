
$("#offcanvasNavbar2 a").click(function(){
  $('.offcanvas').offcanvas('hide');
});

// Start main navigation
$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $("nav").addClass("fixed-header");
    $("nav div").addClass("visible-title");
  } else {
    $("nav").removeClass("fixed-header");
    $("nav div").removeClass("visible-title");
  }
});
// End main navigation

// Strat Hero Slider
$(".hero_slider").slick({
  infinite: true,
  dots: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
  pauseOnHover: true,


});
// $(".progressBarContainer").slick({
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   infinite: true,
//   asNavFor: '.hero_slider',
//   centerMode: true,
//   focusOnSelect: true,
//   speed: 500,
//   autoplaySpeed: 2000,
//   arrows: true,

//   responsive: [
//      {
//         breakpoint: 768,
//         settings: {
//           slidesToShow:3,
//             }
//      }


//   ]
// });

//ticking machine
var percentTime;
var tick;
var time = 1;
var progressBarIndex = 0;

var progress = $(".inProgress");

$(".progressBarContainer .progressBar").each(function (index) {
  var progress = "<div class='inProgress inProgress" + index + "'></div>";
  $(this).html(progress);


});

function startProgressbar() {
  resetProgressbar();
  percentTime = 0;
  tick = setInterval(interval, 10);
}

function interval() {
  if (
    $(
      '.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]'
    ).attr("aria-hidden") === "true"
  ) {
    progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data(
      "slickIndex"
    );

    console.log(progressBarIndex);

    if (progressBarIndex == 1) {
      $(".inProgress0").addClass("on");
      $(".inProgress1").removeClass("on");
    } else if (progressBarIndex == 2) {
      $(".inProgress0").addClass("on");
      $(".inProgress1").addClass("on");
    } else if (progressBarIndex == 0) {
      $(".inProgress0").removeClass("on");
      $(".inProgress1").removeClass("on");
    }
    startProgressbar();
  } else {
    percentTime += 1 / (time + 2);
    $(".inProgress" + progressBarIndex).css({
      width: percentTime + "%",
    });
    if (percentTime >= 100) {
      $(".single-item").slick("slickNext");

      //console.log(progressBarIndex);

      if (progressBarIndex == 0) {
        $(".inProgress0").addClass("on");
      } else if (progressBarIndex == 1) {
        $(".inProgress0").addClass("on");
        $(".inProgress1").addClass("on");
      } else if (progressBarIndex == 2) {
        $(".inProgress0").removeClass("on");
        $(".inProgress1").removeClass("on");
      }

      progressBarIndex++;

      if (progressBarIndex > 2) {
        progressBarIndex = 0;
      }
      startProgressbar();
    }
  }
}

function resetProgressbar() {
  $(".inProgress").css({
    width: 0 + "%",
  });
  clearInterval(tick);
}
startProgressbar();
// End ticking machine

$(".progressBarContainer div").click(function () {
  clearInterval(tick);
  var goToThisIndex = $(this).find("span").data("slickIndex");
  $(".single-item").slick("slickGoTo", goToThisIndex, true);
  startProgressbar();

 

});
// End Hero Slider


// Start Features slider Section
$(".slider-for").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
  autoplay: true,
  speed: 1500,

});
$(".slider-nav").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  vertical: true,
  asNavFor: ".slider-for",
  dots: false,
  focusOnSelect: true,
  verticalSwiping: true,
  speed: 1500,
  arrows: false,
  swipeToSlide: true,
  responsive: [
    
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        vertical: false,
        dots: true,
      },
    },
    
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        vertical: false,
        verticalSwiping: false,
        dots: true,
      },
    },
  ],
});

// End Features slider Section

// Start Testimonial Slider

$(".testimonial-items")
  .slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          vertical: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        },
      },
    ],
  })

  .on("setPosition", function (event, slick) {
    slick.$slides.css("height", slick.$slideTrack.height() + "px");
  });
// End Testimonial Slider

$('.slider-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
	infinite: true,
	speed: 1000,
  appendArrows: '.arrow_position',
  asNavFor: '.slider-thumb',
    arrows: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
});
$('.slider-thumb').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  asNavFor: '.slider-content',
  dots: false,
  loop:true,
  centerMode: false,
  focusOnSelect: true
});






const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});



