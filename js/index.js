const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.addEventListener('scroll', function() {
  var envatoNavbar = document.querySelector('.envato');
  var mainNav = document.querySelector('.main-nav');
  var searchNav = document.querySelector('.search-nav');
  
  // Get the distance from the top of the page to the search-nav
  var searchNavBottom = searchNav.getBoundingClientRect().bottom;

  // If search-nav is out of view, fix main-nav
  if (searchNavBottom <= 0) {
      mainNav.classList.add('fixed-nav');
  } else {
      mainNav.classList.remove('fixed-nav');
  }
});
