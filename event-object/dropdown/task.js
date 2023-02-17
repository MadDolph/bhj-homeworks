const button = document.querySelector('.dropdown');
const menu = document.querySelector('.dropdown__list');
const menuItem = document.getElementsByClassName("dropdown__item");
let itemArray = Array.from(menuItem);
menu.drop = false;
button.addEventListener('click', e => {
    if(e.target.className === 'dropdown__value') {
        drop_collapse();
    }
    if(e.target.className === 'dropdown__link') {
        button.querySelector('.dropdown__value').textContent = e.target.textContent;
        drop_collapse();
    }
    e.preventDefault();
});
function drop_collapse() {
    if(!menu.drop) {
        menu.classList.add('dropdown__list_active');
        menu.drop = true;
    } else {
        menu.classList.remove('dropdown__list_active');
        menu.drop = false;
    }        
    return false;
}