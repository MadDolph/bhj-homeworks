const rev = document.querySelectorAll('.reveal');
const windowPointer = window;
let revArray = Array.from(rev);
windowPointer.addEventListener('scroll', () => {
    for(let i = 0; i < revArray.length; i++) {
        if(revArray[i].getBoundingClientRect().bottom > 0 && revArray[i].getBoundingClientRect().top < windowPointer.innerHeight) {
            revArray[i].classList.add('reveal_active');
        }  else {
            revArray[i].classList.remove('reveal_active');
        }
    }
});
