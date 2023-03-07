const struct = document.querySelectorAll('.interest');
let structArray = Array.from(struct);
for(let el of structArray) {
    if(el.parentElement.className == '') {
        let branch = el.querySelectorAll('.interest__check');
        el.querySelector('.interest__check').addEventListener('change', (e) => {
            if(e.target.checked) {
                for(let element of branch) {
                    element.checked = true;
                }
            } else {
                for(let element of branch) {
                    element.checked = false;
                } 
            }
        })
    }
 }
