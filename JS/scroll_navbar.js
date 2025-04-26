const navbar = document.querySelector('.navbar');

function x() {
    if (window.pageYOffset > 100) { 
        navbar.classList.add('scroll');
      } else {
        navbar.classList.remove('scroll');
      }
}


window.addEventListener('scroll', x);