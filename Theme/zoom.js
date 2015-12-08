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

});
