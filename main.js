var dollar = 0;
var totalclick = 0;
var totalclicksupgrade = 0;
var automate1totalclick = 0;
var costA1 = 10;
var productionmultiplier1 =1;
var productionmultiplier2 =1;
var cps=0;





function Update() {
    cps= automate1totalclick * (totalclick* 10)* (productionmultiplier2*productionmultiplier1);
    document.getElementById('dollars').innerHTML = dollar.toFixed(3);
    document.getElementById('totalclicks').innerHTML = totalclick;
    document.getElementById('cpss').innerHTML = cps.toFixed(7);
    if (productionmultiplier>2){                                            //produktionmultiplier2 over time auf 1 reseten
        productionmultiplier2=productionmultiplier2-0.0005;
        document.getElementById('productionmultipliers').innerHTML = productionmultiplier2.toFixed(4);
    }  
}
function CpsGutschreiben() {
      dollar = dollar + cps;
      document.getElementById('dollars').innerHTML = dollar.toFixed(3);
}


function quest1(){
    document.getElementById('totalclicks').innerHTML = totalclick;
    if (totalclick>=100){
        // QUEST ZIEL einfügen
    }
}
function removeQuest() {
    if (totalclick>=100){
    document.getElementById("Quest1").style.display = "none";
    }
}
function clickMe() {
    dollar = dollar + 1;
    totalclick = totalclick + 1;
    document.getElementById('dollars').innerHTML = dollar.toFixed(3);
    document.getElementById('totalclicks').innerHTML = totalclick;
}
function hoverOverMe() {
    productionmultiplier2=productionmultiplier2+0.001; 
    document.getElementById('productionmultiplier2s').innerHTML = productionmultiplier2.toFixed(4);
}

function automate1TotalClick() {
    if (dollar > costA1) {
        automate1totalclick = automate1totalclick + 1;
        dollar = dollar - costA1;
        costA1 = costA1 * 1.1;
        document.getElementById('automate1totalclicks').innerHTML = automate1totalclick;
        document.getElementById('costA1s').innerHTML = costA1.toFixed(3);
        document.getElementById('dollars').innerHTML = dollar.toFixed(3);
    }
}







/*function automate2auto1{
 if (dollar > costA2){
   automate1totalclick = automate1totalclick +1;
   dollar = dollar - cost A2;
   costA2 = costA2 * 1.2
   document.getElementById('automate2auto1').innerHTML = automate1totalclick;
   document.getElementById('dollars').innerHTML = dollar.toFixed(3);
   document.getElementById('costA1s').innerHTML = costA1.toFixed(3);
 }
}
*/

window.setInterval(function() {
    // funktionen 1x pro Sekunden Updaten (CPS)

    Update();
    CpsGutschreiben();
}, 1000);




// next: LVL and Quest