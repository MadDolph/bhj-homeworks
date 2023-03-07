const struct = document.querySelectorAll('.interest');
let structArray = Array.from(struct);
for(let el of structArray) {
    if(el.parentElement.className == '') {
        el.querySelector('.interest__check').addEventListener('change', (e) => {
            if(e.target.checked) {
                for(let element of el.querySelectorAll('.interest__check')) {
                    element.checked = true;
                }
            } else {
                for(let element of el.querySelectorAll('.interest__check')) {
                    element.checked = false;
                } 
            }
        })
    }
 }