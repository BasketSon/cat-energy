var sliderRealHandle = document.getElementById('slider-handle');
var sliderFakeHandle = document.querySelector('.slider__handle');
var afterPicture = document.querySelector('.compare-block__after');
var afterGradient = document.querySelector('.compare-block__after');
var wasBtn = document.querySelector('.slider__label--left');
var isBtn = document.querySelector('.slider__label--right');
var gradientStyle = window.getComputedStyle(afterGradient);
var gradientWidth = gradientStyle.width;

wasBtn.addEventListener('click', function () {
  sliderFakeHandle.style.width = '100%';
  afterGradient.style.clip = 'rect(auto, auto, auto, ' + parseInt(gradientWidth, 10) + 'px)';
})

isBtn.addEventListener('click', function () {
  sliderFakeHandle.style.width = '0%';
  afterGradient.style.clip = 'rect(auto, auto, auto, auto)';
})

var eventList = ['change', 'keyup', 'input',
'keydown', 'mousedown', 'touchmove'];
for (var i = 0; i < eventList.length; i++) {
  sliderRealHandle.addEventListener(eventList[i], function (ev) {
    if (eventList[i] === 'touchmove') {
      ev.preventDefault();
    }
    gradientStyle = window.getComputedStyle(afterGradient);
    gradientWidth = gradientStyle.width;
    sliderFakeHandle.style.width = (sliderRealHandle.value) + '%';
    afterGradient.style.clip = 'rect(auto, auto, auto, ' + (parseInt(gradientWidth, 10) * sliderRealHandle.value / 100) + 'px)';
  })
}
