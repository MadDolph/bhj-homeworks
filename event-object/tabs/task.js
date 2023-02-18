const links = Array.from(document.querySelectorAll(".tab"));
const contents = Array.from(document.querySelectorAll(".tab__content"));
let cActive = 0;
for(let i = 0; i < links.length; i++) {
    links[i].onclick = () => {
        links[cActive].className = 'tab';
        contents[cActive].className = 'tab__content';
        links[i].className = 'tab tab_active';
        contents[i].className = 'tab__content tab__content_active';
        cActive = i;
        return false;
    }
}
