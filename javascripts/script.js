$(document).ready(function () {
  //back to top
  var $backToTop = $(".back-to-top");
  $backToTop.hide();
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });
  $backToTop.on('click', function (e) {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
  $('.fancy-menu').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });
  $('li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(500);
  }, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(500);
  });

  $('.owl-carousel-w-auto').owlCarousel({
    loop: false,
    margin: 10,
    dots: false,//dots navigation
    autoWidth: true
  });
  $('.owl-carousel-autoplay').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,//dots navigation
    autoWidth: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
  });
  $('.owl-carousel-img').owlCarousel({
    loop: false,
    margin: 10,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      }
      // 1200: {
      //   items: 4
      // }
    }
  });


  $("a[data-toggle='collapse']").on('click', function () {
    var link = $(this).attr('href')
    $('#accordion').on('show.bs.collapse', function () {
      // console.log(link);
      window.open(link, '_self');
      return false;
    });
  });



  $('.fullwidthbanner').revolution({
    delay: 5000,
    startwidth: 1170,
    startheight: 550,
    onHoverStop: "on",
    navigationType: "none",
    soloArrowLeftHOffset: 0,
    soloArrowRightHOffset: 0,
    touchenabled: "on",
    fullWidth: "off"
    // fullScreen:"on"
    // forceFullWidth:"on"
  });


  

});

var containerEl = document.querySelector('.mixitup-container');
var mixer = mixitup(containerEl, {
  selectors: {
    control: '[data-mixitup-control]'
  }
});



// $(function () {
//   $('.mixitup-container').mixItUp();
// });

// (function () {
//   "use strict";
//   window.addEventListener("load", function () {
//     var form = document.getElementById("needs-validation");
//     form.addEventListener("submit", function (event) {
//       if (form.checkValidity() == false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//       form.classList.add("was-validated");
//     }, false);
//   }, false);
// }());