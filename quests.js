var questcomplete1=false;
var questcomplete2=false;
var questcomplete3=false;
var questcomplete4=false;
var questcomplete5=false;
var questcomplete6=false;
var questcomplete7=false;
var questcomplete8=false;
var questcomplete9=false;
function questupdate(){
    if (questcomplete1==false)
    var questvar1 =totalclick;
    if (questvar1 < 100){
    document.getElementById('questvar1s').innerHTML = questvar1.toFixed(0);
    }
    else {
        document.getElementById('questvar1s').innerHTML = 100;
    }
    if (questcomplete2==false)
    var questvar2 =dollaralltime;
    if (questvar2 < 100){
    document.getElementById('questvar2s').innerHTML = questvar2.toFixed(0);
    }
    else {
        document.getElementById('questvar2s').innerHTML = 100;
    }
    if (questcomplete3==false)
    var questvar3 =dollar;
    if (questvar3 < 100){
    document.getElementById('questvar3s').innerHTML = questvar3.toFixed(0);
    }
    else {
        document.getElementById('questvar3s').innerHTML = 100;
    }
    var questvar5 =hovercrittemp;
    if (questvar5 >= 1){
    document.getElementById('questvar5s').innerHTML = 1;
    }
    else {
        document.getElementById('questvar5s').innerHTML = questvar5.toFixed(3);
    }
}
function quest1() {
    if (totalclick>=5) {
        xp = xp + 30;
        questcomplete1==true;
        document.getElementById("quest1").style.display = "none";
    }
}
function quest2() {
    if (dollaralltime>=10) {
        xp = xp + 50;
        questcomplete2==true;
        document.getElementById("quest2").style.display = "none";
    }
}
function quest3() {
    if (dollar>=15) {
        xp = xp + 30;
        questcomplete3==true;
        document.getElementById("quest3").style.display = "none";
    }
}
function quest4() {
    if (tickspeedcountertemp==1) {
        xp = xp + 50;
        tickspeedcountertemp = 0;
        questcomplete4==true;
        document.getElementById("quest4").style.display = "none";
    }
}
function quest5() {
    if (hovercrittemp>=1) {
        hovercrittemp = 0;
        xp = xp + 30;
        questcomplete5==true;
        document.getElementById("quest5").style.display = "none";
    }
}
function quest6() {
    if (totalclick>=5) {
        questcomplete6==true;
        document.getElementById("quest6").style.display = "none";
    }
}
function quest7() {
    if (totalclick>=5) {
        questcomplete7==true;
        document.getElementById("quest7").style.display = "none";
    }
}
function quest8() {
    if (totalclick>=5) {
        questcomplete8==true;
        document.getElementById("quest8").style.display = "none";
    }
}
function quest9() {
    if (totalclick>=5) {
        questcomplete9==true;
        document.getElementById("quest9").style.display = "none";
    }
}