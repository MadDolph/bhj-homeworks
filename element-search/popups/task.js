const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');
const closure = document.querySelectorAll('.modal__close');
let onclickArray = Array.from(closure);
for(let i=0; i < onclickArray.length; i++) {
    onclickArray[i].onclick = () => {        
        const active = document.querySelector('.modal_active');
        active.classList.remove('modal_active');
        if(onclickArray[i].classList.contains('show-success')) {
            document.getElementById('modal_success').classList.add('modal_active');
        }
    }
}
