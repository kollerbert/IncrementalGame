var dollar = 0;
var dollaralltime=0;
var xi = 0;
var totalclick = 0;
var automateinteresttotal1 = 0;
var automateinteresttotal2 = 0;
var automateinteresttotal3 = 0;
var automateinteresttotal4 = 0;
var costA1 = 1;
var costA2 = 1;
var costA3 = 1;
var costA4 = 1;
var cps = 0;
var hovercrit=1;
var hovercrittemp=0;
var tickspeed = 1000;
var tickspeedcost = 1;
var tickspeedcountertemp=0;
var interestrate=0.001;
var interestupgrade =0;
var interestupgradecost =1000;
var investment=0; 
var counter=0;
var tag = 0;
var monat = 'January';
var jahr = 2000;
var monatcounter=1;
var time;
var jahrmultiplier =1;
var upgraderdy = true;
var automateinteresttemp1 = 0;
var automateinterestmultiplier1 = 1;
var automateinteresttemp2 = 0;
var automateinterestmultiplier2 = 1;
var automateinteresttemp3 = 0;
var automateinterestmultiplier3 = 1;
var automateinteresttemp4 = 0;
var automateinterestmultiplier4 = 1;
var upgradeprozent1=0;
var upgradeprozent2=0;
var upgradeprozent3=0;
var upgradeprozent4=0;
var lastnum1 = 0;
var lastnum2 = 0;
var lastnum3 = 0;
var lastnum4 = 0;
function Update() {
    cps = (totalclick*automateinteresttotal1 * automateinterestmultiplier1 *interestrate*jahrmultiplier*inflation);
    document.getElementById('dollars').innerHTML = dollar.toFixed(3);
    document.getElementById('totalclicks').innerHTML = totalclick;
    document.getElementById('cpss').innerHTML = cps.toFixed(3);
    document.getElementById('automateinteresttotal1s').innerHTML = automateinteresttotal1;
    document.getElementById('hovercrits').innerHTML = hovercrit.toFixed(4);
    document.getElementById('interestrates').innerHTML = interestrate.toFixed(4);
    document.getElementById('lvlcoinss').innerHTML = lvlcoins.toFixed(0);
    document.getElementById('interestupgradecosts').innerHTML = interestupgradecost.toFixed(0);
    //document.getElementById('investments').innerHTML = investment.toFixed(0);
    //document.getElementById('counters').innerHTML = counter.toFixed(0);
    document.getElementById('lvls').innerHTML = lvl.toFixed(0);
    document.getElementById('xis').innerHTML = xi.toFixed(3);
    if (hovercrit > 1) {
        //produktionmultiplier2 over time auf 1 reseten
        hovercrit = hovercrit - 0.0005;
    }
}
function clickMe() {
    if (upgradecount1!=0){
        if (critcountertemp>=100){
            dollar = dollar + 2;
            critcountertemp = critchance;
        }
        else {
            critcountertemp = critcountertemp + critchance;
            dollar = dollar + 1;
        }
    }
    else{
        dollar = dollar + 1;
    }
    dollaralltime = dollaralltime +1;
    totalclick = totalclick + 1;
    xi = xi + 0.1;
    document.getElementById('dollars').innerHTML = dollar.toFixed(3);
    document.getElementById('totalclicks').innerHTML = totalclick;
    document.getElementById('xis').innerHTML = xi.toFixed(3);
}
function CpsGutschreiben() {
    dollar = dollar + cps ;
    dollaralltime = dollaralltime + cps;
}
function automateGutschreiben() {
    if (automateinteresttotal2>0){
        automateinteresttotal1=automateinteresttotal1 + 1*automateinteresttotal2*automateinterestmultiplier2;
        document.getElementById('automateinteresttotal1s').innerHTML = automateinteresttotal1;
    }
    if (automateinteresttotal3>0){
        automateinteresttotal2=automateinteresttotal2 + 1*automateinteresttotal3*automateinterestmultiplier3;
        document.getElementById('automateinteresttotal2s').innerHTML = automateinteresttotal2;
    }
    if (automateinteresttotal4>0){
        automateinteresttotal3=automateinteresttotal3 + 1*automateinteresttotal4*automateinterestmultiplier4;
        document.getElementById('automateinteresttotal3s').innerHTML = automateinteresttotal3;
    }
}
function automateInterest1() {
    if (dollar > costA1) {
        automateinteresttotal1 = automateinteresttotal1 + 1;
        automateinteresttemp1 = automateinteresttemp1 + 1;
        dollar = dollar - costA1;
        if (automateinteresttemp1>=10){
            costA1 = costA1 * 10;
        }
        else{
            costA1 = costA1 * 1.1;
        }
        document.getElementById('automateinteresttotal1s').innerHTML = automateinteresttotal1;
        document.getElementById('costA1s').innerHTML = costA1.toFixed(2);
        document.getElementById('dollars').innerHTML = dollar.toFixed(2);
    }
}
function automateInterest2() {
    if (dollar > costA2) {
        automateinteresttotal2 = automateinteresttotal2 + 1;
        automateinteresttemp2 = automateinteresttemp2 + 1;
        dollar = dollar - costA2;
        costA1 = costA2 * 1.1;
        document.getElementById('automateinteresttotal2s').innerHTML = automateinteresttotal2;
        document.getElementById('costA2s').innerHTML = costA2.toFixed(2);
        document.getElementById('dollars').innerHTML = dollar.toFixed(2);
    }
}
function automateInterest3() {
    if (dollar > costA3) {
        automateinteresttotal3 = automateinteresttotal3 + 1;
        automateinteresttemp3 = automateinteresttemp3 + 1;
        dollar = dollar - costA1;
        costA1 = costA3 * 1.1;
        document.getElementById('automateinteresttotal3s').innerHTML = automateinteresttotal3;
        document.getElementById('costA3s').innerHTML = costA3.toFixed(2);
        document.getElementById('dollars').innerHTML = dollar.toFixed(2);
    }
}
function automateInterest4() {
    if (dollar > costA4) {
        automateinteresttotal4 = automateinteresttotal4 + 1;
        automateinteresttemp4 = automateinteresttemp4 + 1;
        dollar = dollar - costA4;
        costA1 = costA4 * 1.1;
        document.getElementById('automateinteresttotal4s').innerHTML = automateinteresttotal4;
        document.getElementById('costA4s').innerHTML = costA4.toFixed(2);
        document.getElementById('dollars').innerHTML = dollar.toFixed(2);
    }
}
function date(){
    if (totalclick>0){
        tag = tag + 1;
        if (tag > 30){
            monatcounter = monatcounter + 1;
            tag =1;
            if (monatcounter == 1){
                monat = 'January';
            }
            if (monatcounter == 2){
                monat = 'February';
            }
            if (monatcounter == 3){
                monat = 'March';
            }
            if (monatcounter == 4){
                monat = 'April';
            }
            if (monatcounter == 5){
                monat = 'May';
            }
            if (monatcounter == 6){
                monat = 'June';
            }
            if (monatcounter == 7){
                monat = 'July';
            }
            if (monatcounter == 8){
                monat = 'August';
            }
            if (monatcounter == 9){
                monat = 'September';
            }
            if (monatcounter == 10){
                monat = 'October';
            }
            if (monatcounter == 11){
                monat = 'November';
            }
            if (monatcounter == 12){
                monat = 'December'
                monatcounter = 0;
                jahr = jahr + 1;
                jahrmultiplier = jahrmultiplier*1.1;
            }
        }
        time = tag + '.' + monat + ' ' + jahr;
        document.getElementById('times').innerHTML= time;
    }
}
function interestUpgrade(){
    if (dollar>interestupgradecost){
        dollar = dollar - interestupgradecost;
        interestupgrade=interestupgrade +1;
        interestupgradecost=interestupgradecost*10;
        interestrate = interestrate + 0.0005;
        document.getElementById('interestupgradecosts').innerHTML = interestupgradecost.toFixed(0);
    }
}
function hoverCrit() {
    hovercrit = hovercrit + 0.001;
    hovercrittemp = hovercrittemp + 0.001;
}
function tickspeedUpgrade(){
    if (dollar>tickspeedcost){
    dollar=dollar - tickspeedcost;
    tickspeedcost = tickspeedcost*500;
    tickspeed=tickspeed*0.99;
    document.getElementById('tickspeeds').innerHTML=tickspeed.toFixed(0);
    document.getElementById('tickspeedcosts').innerHTML=tickspeedcost.toFixed(1);
    document.getElementById('dollars').innerHTML=dollar.toFixed(3);
        if (tickspeedcountertemp==0){
            tickspeedcountertemp=1;
        }
    }
}
function animeUpgradeRdy1(){
    var CSStransforms = anime({
        targets: 'div.upgraderdy1',
        translateX: [
            {value:250, duration: 500},
            {value:0, duration:500}
        ],
        scale: [
            {value:3, duration: 500},
            {value:1, duration:500},
        ],
    });
}
function animeUpgradeRdy2(){
    var CSStransforms = anime({
        targets: 'div.upgraderdy2',
        translateX: [
            {value:250, duration: 500},
            {value:0, duration:500}
        ],
        scale: [
            {value:3, duration: 500},
            {value:1, duration:500},
        ],
    });
}
function animeUpgradeRdy3(){
    var CSStransforms = anime({
        targets: 'div.upgraderdy3',
        translateX: [
            {value:250, duration: 500},
            {value:0, duration:500}
        ],
        scale: [
            {value:3, duration: 500},
            {value:1, duration:500},
        ],
    });
}
function animeUpgradeRdy4(){
    var CSStransforms = anime({
        targets: 'div.upgraderdy4',
        translateX: [
            {value:250, duration: 500},
            {value:0, duration:500}
        ],
        scale: [
            {value:3, duration: 500},
            {value:1, duration:500},
        ],
    });
}
function automateInterestUpgrade1(){
    if (automateinteresttemp1 >= 10 && xi >=1 ){
        animeUpgradeRdy1();
        automateinterestmultiplier1=automateinterestmultiplier1*2;
        automateinteresttemp1=automateinteresttemp1-10;
        xi = xi -1;
    }
}
function automateInterestUpgrade2(){
    if (automateinteresttemp2 >= 10 && xi >=1 ){
        animeUpgradeRdy2();
        automateinterestmultiplier2=automateinterestmultiplier2*2;
        automateinteresttemp2=automateinteresttemp2-10;
        xi = xi -1;
    }
}
function automateInterestUpgrade3(){
    if (automateinteresttemp3 >= 10 && xi >=1 ){
        animeUpgradeRdy3();
        automateinterestmultiplier3=automateinterestmultiplier3*2;
        automateinteresttemp3=automateinteresttemp3-10;
        xi = xi -1;
    }
}
function automateInterestUpgrade4(){
    if (automateinteresttemp4 >= 10 && xi >=1 ){
        animeUpgradeRdy4();
        automateinterestmultiplier4=automateinterestmultiplier4*2;
        automateinteresttemp4=automateinteresttemp4-10;
        xi = xi -1;
    }
}
function upgradeBar1(){
    upgradeprozent1 = automateinteresttemp1*10;
    lastnum1 = upgradeprozent1.toString().charAt( upgradeprozent1.length);
    var elem = document.getElementById("upgradebarbalken1");
       if (upgradeprozent1 >= 100){
            elem.style.width = 100 + '%'
        }
        else{
            elem.style.width = lastnum1*10 + '%' 
         }
}
function upgradeBar2(){
    upgradeprozent2 = automateinteresttemp2*10;
    lastnum2 = upgradeprozent2.toString().charAt( upgradeprozent2.length);
    var elem = document.getElementById("upgradebarbalken2");
        if (upgradeprozent2 >= 100){
            elem.style.width = 100 + '%'
        }
        else{
            elem.style.width = lastnum2*10 + '%' 
            }
}
function upgradeBar3(){
        upgradeprozent3 = automateinteresttemp3*10;
        lastnum3 = upgradeprozent3.toString().charAt( upgradeprozent3.length);
        var elem = document.getElementById("upgradebarbalken3");
            if (upgradeprozent3 >= 100){
                elem.style.width = 100 + '%'
            }
            else{
                elem.style.width = lastnum3*10 + '%' 
            }
}
function upgradeBar4(){
    upgradeprozent4 = automateinteresttemp4*10;
    lastnum4 = upgradeprozent4.toString().charAt( upgradeprozent4.length);
    var elem = document.getElementById("upgradebarbalken4");
        if (upgradeprozent4 >= 100){
            elem.style.width = 100 + '%'
        }
        else{
            elem.style.width = lastnum4*10 + '%' 
        }
}
function show(elementID) {
    // error wenn page nicht vorhanden
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }

    // alle pages hiden
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    // die gewollte page showen
    ele.style.display = 'block';
}

/*function quest1() {
    if (totalclick >= 1) {
        document.getElementsByClassName('quest1').style.display = none;
    }
}*/









window.setInterval(function() {
    // funktionen 1x pro Sekunden Updaten (CPS)
    date();
    lvlbar();
    progressBar();
    upgradeBar1();
    upgradeBar2();
    upgradeBar3();
    upgradeBar4();
    questupdate();
    console.log('log ' + progress);
}, 1000);

window.setInterval(function() {
    // funktionen 1x pro Sekunden Updaten (CPS)
    Update();
    CpsGutschreiben();
    automateGutschreiben();
}, tickspeed);

/* next: 
->
-> Bank

--> MODUS: interest monthly statt daily gutschreiben
-> upgrade rdy box (animejs)
-> -> LVL and Quest
--> (SPÄTER evtl Jahreszeiten)
->  Zahlen fixxen sodass sie mit k,m 
-> STORY:hover button --> "Akten manipulieren um Kommafehler zu deinen gunsten" hervorzurufen um so den CPS chance auf critical tick (x10) zu geben
-> STORY:totalclicks repräsentieren "eingreifen in den markt" und sind gut, aber spieler versucht dieser durch upgrades/interactions im austausch gegen multiplier gering zu halten
--> investments die über Zeit das invetierte Cash multiplizieren 


--> buildingproduciton*2 pro 10 upgrades

--> investments die über Zeit das invetierte Cash multiplizieren 




--> mehrere seiten machen -> jeweils <div class"XYZ"> um die Seite (index,quest) und dann bei button click display:none und display:wieder da



*/




/*function progressBar() {
    var elem = document.getElementById("progressbar");   
      if (width == 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = (tag + monat*30)/3.6 + '%'; 
      }
    }
  }
  */ 

/*function bank10Investment() {
    if (counter==0){
        investment= dollar*document.getElementById("bank10").value;
        dollar = dollar - investment;
        progressBar();
        if (counter<6){
        setInterval(function() {
            investment = investment *1.1;
            counter = counter + 1;

        }, tickspeed);
    dollar = dollar + investment;
        }       
    }
}
*/


