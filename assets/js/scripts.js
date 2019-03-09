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