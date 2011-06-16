hoverToggle jQuery Plugin
=========================

* By Kali Donovan
* Released under the MIT license (MIT-LICENSE.txt)

I found myself continually reimplementing the simple logic of hiding/showing child elements when the parent element is hovered over.

This is nothing groundbreaking, but I find it useful.

Example Usage: 
-------------

    $('li.someclass').hoverToggle('.classToShow')


This is equivalent to:

    $('.classToShow').hide()
    $('li.someclass').hover(function(e) {
      $(e.target).children('.classToShow').show();
    }, function(e) {
      $(e.target).children('.classToShow').hide();
    })
