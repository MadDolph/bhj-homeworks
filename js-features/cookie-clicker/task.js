const counter = document.getElementById("clicker__counter");
const cookies = document.getElementById("cookie");

cookies.onclick = function () {
    counter.textContent++
    if (counter.textContent % 2 != 0) {
        cookies.width = cookies.width * 2;
    } else {
        cookies.width = cookies.width / 2;
    }
    
}

