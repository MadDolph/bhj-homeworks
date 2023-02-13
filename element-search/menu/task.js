const menuItem = document.getElementsByClassName('menu__link');
let menuArray = Array.from(menuItem);
for(let i = 0; i < menuArray.length; i++) {
    menuArray[i].onclick = () => {
        const parentEl = menuArray[i].parentElement;
        const includeMenu = parentEl.querySelector('ul');
        if(includeMenu.classList.contains('menu_active')) {            
            includeMenu.classList.remove('menu_active');
            return false;
        } else if (includeMenu !== null) {
            const closeSubMenu = document.querySelector('ul.menu.menu_sub.menu_active');
            if(closeSubMenu) {
                closeSubMenu.classList.remove('menu_active');            
            }
            includeMenu.classList.add('menu_active');
            return false;
            }
          
        }         
}
