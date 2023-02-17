const button = document.querySelector('.dropdown__value');
const menu = document.querySelector('.dropdown__list');
menu.drop = false;
button.addEventListener('click', drop_collapse);

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





