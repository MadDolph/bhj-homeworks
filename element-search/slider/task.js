const rightButton = document.querySelector('.slider__arrow_next');
const leftButton = document.querySelector('.slider__arrow_prev');
const slides = document.getElementsByClassName('slider__item');
let slidesArray = Array.from(slides);
let activeSlide = 0;
rightButton.onclick = () => {
    leaf("right");
}
leftButton.onclick = () => {
    leaf("left");
}
function leaf(direction) {
    slidesArray[activeSlide].classList.remove('slider__item_active');
    switch(direction) {
        case "right":
            activeSlide++;
            break;
        case "left":
            activeSlide--;
            break
    }
    if(activeSlide == slidesArray.length) {
        activeSlide = 0;
    }
    if(activeSlide < 0) {
        activeSlide = slidesArray.length - 1;
    }
    slidesArray[activeSlide].classList.add('slider__item_active');
    return;
}