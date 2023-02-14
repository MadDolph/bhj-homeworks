const rightButton = document.querySelector('.slider__arrow_next');
const leftButton = document.querySelector('.slider__arrow_prev');
const slides = document.querySelectorAll('.slider__item');
const dots = document.getElementsByClassName('slider__dot');
let dotsArray = Array.from(dots);
let slidesArray = Array.from(slides);
let activeSlide = 0;
rightButton.onclick = () => {
    leaf("right");
}
leftButton.onclick = () => {
    leaf("left");
}
function leaf(direction) {
    slideManager("hid", activeSlide);   
    switch(direction) {
        case "right":
            activeSlide++;
            break;
        case "left":
            activeSlide--;
            break;
    }
    if(activeSlide == slidesArray.length) {
        activeSlide = 0;
    }
    if(activeSlide < 0) {
        activeSlide = slidesArray.length - 1;
    }
    slideManager("show", activeSlide);
    return;
}
for(let i = 0; i < dotsArray.length; i++) {
    dotsArray[i].onclick = () => {
        slidesArray[activeSlide].classList.remove('slider__item_active');
        activeSlide = i;
        slidesArray[activeSlide].classList.add('slider__item_active');
    }
}
function slideManager(flag, id) {
    switch(flag) {
        case "show":
            slidesArray[id].classList.add('slider__item_active');
            break;
        case "hid":
            slidesArray[id].classList.remove('slider__item_active');
            break;
    }
    return;
}