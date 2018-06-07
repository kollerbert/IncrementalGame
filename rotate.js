
function rotate(value){
document.getElementById('divRotateBox').style.webkitTransform="rotate(" + value + "deg)";
document.getElementById('divRotateBox').style.msTransform="rotate(" + value + "deg)";
document.getElementById('divRotateBox').style.MozTransform="rotate(" + value + "deg)";
document.getElementById('divRotateBox').style.OTransform="rotate(" + value + "deg)";
document.getElementById('divRotateBox').style.transform="rotate(" + value + "deg)";

var dollarboost =value/18*10 ;
var tauboost =100-value/18*10 ;

if (value>0){
    document.getElementById('span1').innerHTML="<b>$</b> " + dollarboost.toFixed(1)+"%";
    document.getElementById('span2').innerHTML="<b>τ</b> " + tauboost.toFixed(1) +"%"; 
}

}
