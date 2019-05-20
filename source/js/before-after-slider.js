var sliderRealHandle = document.getElementById('slider-handle');
var sliderFakeHandle = document.querySelector('.slider__handle');
var afterPicture = document.querySelector('.compare-block__after');
var afterGradient = document.querySelector('.compare-block__after');
var gradientStyle = window.getComputedStyle(afterGradient);
var gradientWidth = gradientStyle.width;

window.onload = function () {
  afterGradient.style.clip = 'rect(auto, auto, auto, ' + (parseInt(gradientWidth, 10) * 0.5) + 'px)';
}


var eventList = ['change', 'keyup',
'keydown', 'mousedown', 'mousemove', 'touchmove'];
for (var i = 0; i < eventList.length; i++) {
  sliderRealHandle.addEventListener(eventList[i], function (ev) {
    if (eventList[i] === 'touchmove') {
      ev.preventDefault();
    }
    sliderFakeHandle.style.width = (sliderRealHandle.value) + '%';
    afterGradient.style.clip = 'rect(auto, auto, auto, ' + (parseInt(gradientWidth, 10) * sliderRealHandle.value / 100) + 'px)';
  })
}
