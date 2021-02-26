// Toggle mobile menu with vanilla JS

var mobileMenu = document.getElementsByClassName('mobile-menu-icon');

function toggleMenu(menuClass) {
    var e = document.getElementsByClassName(menuClass);
    if(e[0].style.display == 'block') {
      e[0].style.display = 'none';
      mobileMenu[0].textContent = 'menu';
    }
    else {
      e[0].style.display = 'block';
      mobileMenu[0].textContent = 'close';
    }
    return;
  }
  