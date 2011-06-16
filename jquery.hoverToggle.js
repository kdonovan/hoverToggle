/*!
 * hoverToggle.js
 *
 * Copyright (c) 2010 Kali Donovan
 * Released under the MIT (http://www.opensource.org/licenses/mit-license.php)
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Simple wrapper to encapsulate logic of displaying a sub-element when the parent is hovered over.
 *
 */
(function( $ ){
  
  /*
   *    Example Usage: $('li.someclass').hoverToggle('.classToShow')
   *
   *    Is equivalent to:
   *      $('.classToShow').hide()
   *      $('li.someclass').hover(function(e) {
   *        $(e.target).children('.classToShow').show();
   *      }, function(e) {
   *        $(e.target).children('.classToShow').hide();
   *      })
   *
   */
  $.fn.hoverToggle = function(childToToggle, opts) {

    var settings = {
      hideOnInit: true
    };
    
    if (opts) {
      $.extend(settings, opts);
    }
    
    if (settings.hideOnInit) {
      $(childToToggle).hide();
    }

    return this.hover(function(e){
      $(e.target).children( childToToggle ).show();
    }, function(e){
      $(e.target).children( childToToggle ).hide();
    });
  };
  
})( jQuery );