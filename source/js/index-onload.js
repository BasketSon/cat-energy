var menu = document.querySelector('.site-list');
var afterGradient = document.querySelector('.compare-block__after');
var gradientStyle = window.getComputedStyle(afterGradient);
var gradientWidth = gradientStyle.width;

var removeMenu = function () {
  menu.classList.remove('site-list--show');
}

var clipTheCat = function () {
  afterGradient.style.clip = 'rect(auto, auto, auto, ' + (parseInt(gradientWidth, 10) * 0.5) + 'px)';
}

window.onload = function () {
  removeMenu();
  clipTheCat();
}
