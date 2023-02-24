const controls = document.querySelector('.book__controls');
const fontSizeList = document.querySelectorAll('.font-size');
const colors = document.querySelectorAll('.color');
const book = document.querySelector('.book');
const bookContent = document.querySelector('.book__content');
let bookClassName = 'book';
let fontSizeClassName = '';
let textColorClassName = '';
let backgroundColorClassName = '';
let fontSizeArray = Array.from(fontSizeList);
let textColorArray = Array.from(colors).filter(item => typeof item.dataset.textColor != 'undefined');
let backgroundColorArray = Array.from(colors).filter(item => typeof item.dataset.bgColor != 'undefined');
controls.addEventListener('click', (e) => {    
    if(e.target.classList.contains('font-size')) {
        let index = fontSizeArray.findIndex(el => el.className == 'font-size font-size_active');
        if(typeof fontSizeList[index].dataset.size != 'undefined') {
            fontSizeList[index].className = 'font-size' + ' font-size_' + fontSizeList[index].dataset.size;
        } else {
            fontSizeList[index].className = 'font-size';
        }
        e.target.className = 'font-size font-size_active';
        if(typeof e.target.dataset.size != 'undefined') {
            fontSizeClassName = ' book_fs-'+ e.target.dataset.size;        
        } else {
            fontSizeClassName = ''; 
        }
    }
    if(e.target.parentElement.classList.contains('book__control_color')) {
        let index = textColorArray.findIndex(el => el.classList.contains('color_active'));
        textColorArray[index].classList.remove('color_active');
        e.target.classList.add('color_active');
        textColorClassName = ' book_color-' + e.target.dataset.textColor;
    }
    if(e.target.parentElement.classList.contains('book__control_background')) {
        let index = backgroundColorArray.findIndex(el => el.classList.contains('color_active'));
        backgroundColorArray[index].classList.remove('color_active');
        e.target.classList.add('color_active');
        backgroundColorClassName = ' book_bg-' + e.target.dataset.bgColor;
    }
    book.className = bookClassName + fontSizeClassName + textColorClassName + backgroundColorClassName;
    console.log(book.className);
    e.preventDefault();
});