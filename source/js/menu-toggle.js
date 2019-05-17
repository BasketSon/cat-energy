var menuButton = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.site-list')

menuButton.addEventListener('click', function () {
  menu.classList.toggle('site-list--show');
})
