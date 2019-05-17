var sliderRealHandle = document.getElementById('slider-handle');
var sliderFakeHandle = document.querySelector('.slider__handle');
var afterPicture = document.querySelector('.compare-block__after');

var eventList = ['change', 'keyup',
'keydown', 'mousedown', 'mousemove', 'touchmove'];
for (var i = 0; i < eventList.length; i++) {
  sliderRealHandle.addEventListener(eventList[i], function (ev) {
    if (eventList[i] === 'touchmove') {
      ev.preventDefault();
    }
    sliderFakeHandle.style.width = (sliderRealHandle.value) + '%';
    afterPicture.style.width = (100 - sliderRealHandle.value) + '%';
  })
}
