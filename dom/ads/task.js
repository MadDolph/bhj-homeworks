let caseArray = Array.from(document.querySelectorAll('.rotator__case'));
let rotateTimer = setInterval(() => {
    let currentActive = caseArray.findIndex(element => element.className == 'rotator__case rotator__case_active');
    caseArray[currentActive].className = 'rotator__case';    
    currentActive++;
    if(currentActive == caseArray.length) {
        currentActive = 0;        
    }
    caseArray[currentActive].style.color = caseArray[currentActive].dataset.color;
    caseArray[currentActive].classList.add('rotator__case_active');
    sleep(caseArray[currentActive].dataset.speed);    
},1000)

function sleep(delay) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < delay);
}

