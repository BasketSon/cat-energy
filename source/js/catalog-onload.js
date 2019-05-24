var menu = document.querySelector('.site-list');

var removeMenu = function () {
  menu.classList.remove('site-list--show');
}

window.onload = function () {
  removeMenu();
}
