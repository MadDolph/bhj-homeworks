const rip = document.getElementById("dead");
const loose = document.getElementById("lost");
let kill = parseInt(rip.textContent);
let fail = parseInt(loose.textContent);
function setDefault() {
    kill = 0;
    fail = 0;
    rip.textContent = kill;
    loose.textContent = fail;
}
function getHole(index) {
    let holename = "hole" + index;
    return(document.getElementById(holename));
}
for(let i = 1; i < 10; i++) {
    getHole(i).onclick = () => {
        if(getHole(i).classList.contains("hole_has-mole")) {
            kill++;      
            rip.textContent = kill;
            if(kill > 9) {
                setDefault();
                window.alert("Вы выиграли");
            }
        } else {
            fail++;           
            loose.textContent = fail;
            if(fail > 4) {
                setDefault();
                window.alert("Вы проиграли");
            }
         }             
    }    
}
