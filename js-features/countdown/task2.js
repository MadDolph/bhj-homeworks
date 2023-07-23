const sTimer = document.getElementById("timer");
timeMinutes = parseInt(sTimer.textContent);
function countdown() {
  let seconds = timeMinutes % 60;
  let minutes = timeMinutes / 60 % 60;
  let hours = timeMinutes / 60 / 60 % 60;
  if(parseInt(timeMinutes) < 0) {
    window.alert("Вы победили в конкурсе!");
    clearInterval(countDown);
  } else {
          sTimer.textContent = `${addZero(Math.trunc(hours))}:${addZero(Math.trunc(minutes))}:${addZero(seconds)}`;
          --timeMinutes;
         }
}

function addZero(source) {
  let text = source + '';
  if(text.length < 2) {
    text = '0' + text;
  }
  return text;
}
let countDown = setInterval(countdown, 1000);