$(document).ready(function() {

  /*
   * Click-handler for members-only menu
   * (Exists in Home Page as well as header of Standard Template)
   */
  $('body').on('click', '.members-only-nav .member-menu', function() {
    var $menu = $('.WaGadgetLoginButton');
    if($menu.is(':visible')) {
      $menu.slideUp('slow');
    }
    else {
      $menu.slideDown('slow');
    }
  });

  /** Scroller for sponser list on home page */
  var $sponsorScroller = $('.sponsor-scroller .gadgetStyleBody p');
  $sponsorScroller.animate(
    { scrollLeft: $sponsorScroller.width() },
    { duration: 10000 }
  );
  $('body').on('mousewheel', $sponsorScroller, function(e) {
    if(e.target.closest('.sponsor-scroller')
      && e.originalEvent.wheelDeltaX
      && e.originalEvent.wheelDeltaX != 0) {
        $sponsorScroller.stop();
    }
  });

});
