const tooltips = document.querySelectorAll('.has-tooltip');
const links = document.querySelectorAll('.has-tooltip');
for(let el of tooltips) {
    el.nTitle = el.title;
    el.title = '';
}
for(let el of links) {
    el.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        e.preventDefault();
    })
}