const sTimer = document.getElementById("timer");
let timeInSeconds = parseInt(sTimer.textContent);
function countdown() {
  let seconds = timeInSeconds % 60;
  let minutes = timeInSeconds / 60 % 60;
  let hours = timeInSeconds / 60 / 60 % 60;
  if(parseInt(timeInSeconds) < 0) {
    window.alert("Вы победили в конкурсе!");
    clearInterval(count);
  } else {
    sTimer.textContent = `${addZero(Math.trunc(hours))}:${addZero(Math.trunc(minutes))}:${addZero(seconds)}`;
    --timeInSeconds;
  }
}

function addZero(num) {
  let str = num + '';
  if(str.length < 2) {
    str = '0' + str;
  }
  return str;
}

let count = setInterval(countdown, 1000);
