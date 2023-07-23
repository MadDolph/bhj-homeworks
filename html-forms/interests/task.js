<<<<<<< HEAD
const interest = document.forms[0];
    console.log(interest);

=======
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
>>>>>>> 0f1a2ccdecb89b2166a84e972c64cc19cc71081b
