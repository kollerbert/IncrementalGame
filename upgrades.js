var upgradecost1 = 10;
var upgradecount1 = 0;
var critchance = 0;
var critcountertemp = 0;


function upgrade1() {
    if (upgradecount1 ==0){
        critchance=9;
    }
    if (dollar>=upgradecost1) {
        upgradecount1 = upgradecount1 + 1;
        dollar = dollar - upgradecost1;
        upgradecost1 = upgradecost1*1.1;
        critchance = critchance + 1;
        document.getElementById('upgradecost1s').innerHTML = upgradecost1.toFixed(0);
        document.getElementById('critchances').innerHTML = critchance.toFixed(0);
            if (upgradecount1>=50){
                document.getElementById("upgrade1").style.display = "none";
            }
    }
}
function upgrade2() {
    if (lvlcoins>=1) {
        totalclick = totalclick/10;
        interestrate = interestrate*10;
        lvlcoins = lvlcoins -1;
    }
}
function upgrade3() {
    if (totalclick>=5) {
        document.getElementById("upgrade3").style.display = "none";
    }
}
function upgrade4() {
    if (totalclick>=5) {
        document.getElementById("upgrade4").style.display = "none";
    }
}
function upgrade5() {
    if (totalclick>=5) {
        document.getElementById("upgrade5").style.display = "none";
    }
}
function upgrade6() {
    if (totalclick>=5) {
        document.getElementById("upgrade6").style.display = "none";
    }
}
function upgrade7() {
    if (totalclick>=5) {
        document.getElementById("upgrade7").style.display = "none";
    }
}
function upgrade8() {
    if (totalclick>=5) {
        document.getElementById("upgrade8").style.display = "none";
    }
}
function upgrade9() {
    if (totalclick>=5) {
        document.getElementById("upgrade9").style.display = "none";
    }
}