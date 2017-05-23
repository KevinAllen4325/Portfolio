var nav = document.querySelector('nav');
var navName = document.querySelector('a');
var navItem = document.querySelector('.navbar-right');
// BOUNCING ARROW ICON AT BOTTOM OF ABOUT ME SECTION //
setInterval(function () {
  $("#downArrow").effect("bounce", {
    times: 4
  }, 2500);
}, 5000);
$(function () {
  smoothScroll(1000);
});
// SMOOTH SCROLLING AND HIGHLIGHTING CURRENT ELEMENT SELECTED //
function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    $("nav div a").css('color', '#a1b1bc')
    $(this).css('color', '#1abc9c')
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}
// CHANGE NAV AND NAV ITEMS HEIGHT //
addEventListener('scroll', () => {
  if (window.pageYOffset == 0 && window.innerWidth > 767) {
    nav.style.height = "93px";
    navName.style.marginTop = "21.5px";
    navItem.style.marginTop = "21.5px";
  } else {
    nav.style.height = "50px";
    navName.style.marginTop = "0";
    navItem.style.marginTop = "0";
  }
});
