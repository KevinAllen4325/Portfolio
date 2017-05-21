// BOUNCING ARROW ICON AT BOTTOM OF ABOUT ME SECTION //
setInterval(function() {
    $("#downArrow").effect( "bounce", 
        {times:4}, 2500 );
    },5000);

  $(function() {
  smoothScroll(1000);
});

// SMOOTH SCROLLING AND HIGHLIGHTING CURRENT ELEMENT SELECTED //
function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );
      $("nav div a").css('color','#a1b1bc')
      $(this).css('color','#1abc9c')
      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
}

