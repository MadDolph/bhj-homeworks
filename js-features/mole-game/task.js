const holes = Array.from(document.getElementsByClassName('hole'));
const dead = document.getElementById('dead');
const loose = document.getElementById('lost');
let kills = 0;
let miss = 0;

function setDefault() {
    kills = 0;
    miss = 0;
    dead.textContent = kills;
    loose.textContent = miss;
}

for (let i = 0; i < holes.length; i++) {
    holes[i].onclick = function() {
        if(holes[i].classList.contains('hole_has-mole')) {
            kills++;
            if(kills < 10) {
                dead.textContent = kills;
            } else {
                setDefault();                
                alert("Вы выиграли!")
            }
        } else {
           miss++;
           if(miss < 5) {
                loose.textContent = miss;                
           } else {
            setDefault();                
            alert("Вы проиграли!")
           }
        }
    }
}