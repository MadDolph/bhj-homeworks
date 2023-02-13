const menuItem = document.getElementsByClassName('menu__link');
const allMenu = document.querySelectorAll('ul');
let allMenuArray = Array.from(allMenu);
let menuArray = Array.from(menuItem);
for(let i = 0; i < menuArray.length; i++) {
    menuArray[i].onclick = () => {
        const parentEl = menuArray[i].parentElement;
        const includeMenu = parentEl.querySelector('ul');
        if(includeMenu.classList.contains('menu_active')) {            
            includeMenu.classList.remove('menu_active');
        } else if (includeMenu !== null) {
            for(let j = 0; j < allMenuArray.length; j++) {
                if(!allMenuArray[j].classList.contains('menu_main')) {
                    allMenuArray[j].classList.remove('menu_active');
                }
            }
            includeMenu.classList.add('menu_active');
            }
            return false;
        }         
}
