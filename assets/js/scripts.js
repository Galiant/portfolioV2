/*Smooth scrolling*/
$('#menu a').on('click', function (e) {

  if (this.hash !== '') {
    e.preventDefault();

    const target = this.hash;

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  }
});

// Typed.js
$('.typed-title').typed({
  stringsElement: $('.typing-title'),
  backDelay: 2000,
  typeSpeed: 0,
  loop: true
});

// Function to change the background color of the menu button and the display value of the menu
function accordionMenu() {
  const menu = document.getElementById("toggled");
  const menuStyle = window.getComputedStyle(menu);
  const display = menuStyle.getPropertyValue('display');

  if (display === 'none') {
    toggle.style.backgroundColor = "white";
    toggle.style.color = "black";
    menu.style.display = "block";
  } else {
    toggle.style.backgroundColor = "transparent";
    toggle.style.color = "white";
    menu.style.display = "none";
  };
};

// Add event listener to menu button
const toggle = document.getElementById("menu-toggle");
toggle.addEventListener("click", accordionMenu, false);

// Modal
var modal = document.querySelectorAll("#myModal1, #myModal2, #myModal3, #myModal4, #myModal5, #myModal6, #myModal7, #myModal8");

var span = document.getElementsByClassName("closeModal");

$("button").click(function () {
  var modalId = Number($(this).attr("id"));
  $(".modal").eq(modalId).fadeIn();
  $(".modal-content").eq(modalId).fadeIn();
})

for (let i = 0; i < span.length; i++) {
  span[i].onclick = function () {
    for (let i = 0; i < modal.length; i++) {
      modal[i].style.display = "none";
    }
  }
}

window.onclick = function (event) {
  for (let i = 0; i < modal.length; i++) {
    if (event.target == modal[i]) {
      for (let i = 0; i < modal.length; i++) {
        modal[i].style.display = "none";
      }
    }
  }
}

/*FIT TEXT*/
$(function () {
  $(".header-text h1").fitText(1, {
    minFontSize: '18px',
    maxFontSize: '96px'
  });
});

/*!
 * FitText.js 1.2
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */

(function ($) {

  $.fn.fitText = function (kompressor, options) {

    // Setup options
    var compressor = kompressor || 1,
      settings = $.extend({
        'minFontSize': Number.NEGATIVE_INFINITY,
        'maxFontSize': Number.POSITIVE_INFINITY
      }, options);

    return this.each(function () {

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})(jQuery);