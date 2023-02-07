let offset = 0;
let count = document.getElementsByClassName('img').length;
let index = 0;
const sliderLine = document.querySelector('.slider__line');
const width = document.querySelector('.slider__img').offsetWidth;
const dots = document.querySelectorAll('.dot');

dots[0].style.backgroundColor = 'white';

document.querySelector('.btn-next').addEventListener('click', nextImage);
document.querySelector('.btn-prev').addEventListener('click', prevImage);

let timerId = setInterval(nextImage, 4000);

function nextImage() {
  offset += width;
  if (offset >= width * count) {
    clearInterval(timerId);
    offset = 0;
  }

  updateIndex();
  sliderLine.style.left = -offset + 'px';
}

function prevImage() {
  offset -= width;
  if (offset < 0) {
    clearInterval(timerId);
    offset = width * count - width;
  }

  updateIndex();
  sliderLine.style.left = -offset + 'px';
}

function updateIndex() {
  dots[index].style.backgroundColor = "transparent";
  if (index < 4) {
    index++;
  } else {
    index = 0;
  }
  dots[index].style.backgroundColor = "white";
}
