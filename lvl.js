var xp = 0;
var lvlprozent = 0;
var lvlxp = 100;
var lvl = 1;
var lvlcoins= 0;

var progress = 0;
var inflation = 0;

function lvlbar(){
    var elem = document.getElementById("lvlbarbalken");
    lvlprozent = xp/lvlxp*100;
    if (lvlprozent <= 100){
        elem.style.width = lvlprozent + '%'
    }
    else{
        xp = xp-lvlxp;
        lvlxp= lvlxp*1.5;
        lvl = lvl + 1;
        lvlcoins = lvlcoins + 1;
        elem.style.width = 0 + '%'
    }
  }



  function progressBar(){
    var elem1 = document.getElementById("progressbar");
    progress = (tag+(monatcounter-1)*30)/3.6;
    elem1.style.width = progress + '%';
    if (progress == 100){
        inflation = inflation*1.1;
    }
}