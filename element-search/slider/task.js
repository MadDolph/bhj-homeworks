const rightButton = document.querySelector('.slider__arrow_next');
const leftButton = document.querySelector('.slider__arrow_prev');
let dotsArray = Array.from(document.getElementsByClassName('slider__dot'));
let slidesArray = Array.from(document.querySelectorAll('.slider__item'));
let activeSlide = 0;
dotsArray[activeSlide].classList.add('slider__dot_active');
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
        dotsArray.forEach(function(item, i, dotsArray){
            item.classList.remove('slider__dot_active');
        })
        slideManager("hid", activeSlide);
        activeSlide = i;
        slideManager("show", activeSlide);
        dotsArray[i].classList.add('slider__dot_active');
    }
}
function slideManager(flag, id) {
    switch(flag) {
        case "show":
            slidesArray[id].classList.add('slider__item_active');
            dotsArray[id].classList.add('slider__dot_active');
            break;
        case "hid":
            slidesArray[id].classList.remove('slider__item_active');
            dotsArray[id].classList.remove('slider__dot_active');
            break;
    }
    return;
}