var xp = 33;
var xpfehlend = 100;
var lvlprozent = 0;
var lvlxp = 100;
var lvl = 2;
var lvlcoins =0;


function lvlbar(){
    xpfehlend = lvlxp - xp;
    lvlprozent = xp/lvlxp*100;
    var elem = document.getElementById("lvlbarbalken");
    if (lvlprozent != 100){
        elem.style.width = lvlprozent + '%'
    }
    else{
        elem.style.width = 80 + '%'
        lvl = lvl +1;
        lvlcoins = lvlcoins +1;
    }
  }