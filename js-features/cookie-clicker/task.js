const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
clicker = parseInt(counter.textContent);

cookie.onclick = () => {
    if (clicker % 2 == 0) {
        cookie.width = 250;
        clicker++;
        counter.textContent = clicker;
    } else {
        cookie.width = 200;
        clicker++;
        counter.textContent = clicker;
    }
    return false;
}