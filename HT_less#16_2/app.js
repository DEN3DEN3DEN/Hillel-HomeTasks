let offset = 0;
let count = document.getElementsByClassName('img').length;
let index = 0;
const sliderLine = document.querySelector('.slider__line');
const width = document.querySelector('.slider__img').offsetWidth;
const dots = document.querySelectorAll('.dot');


document.querySelector('.btn-next').addEventListener('click', nextImage);

document.querySelector('.btn-prev').addEventListener('click', prevImage);

dots[0].style.backgroundColor = 'white';


function nextImage() {
    offset += width;
    if (offset >= width * count) {
        offset = 0;
    }
    dots[index].style.backgroundColor = "transparent";
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    dots[index].style.backgroundColor = "white";
    sliderLine.style.left = -offset + 'px';
}


function prevImage() {
    offset -= width;
    if (offset < 0) {
        offset = width * count - width;
    }
    dots[index].style.backgroundColor = "transparent";
    if (index > 0) {
        index--;
    } else {
        index = 4;
    }
    dots[index].style.backgroundColor = "white";
    sliderLine.style.left = -offset + 'px';
}

let timerId = setInterval(nextImage, 4000);
