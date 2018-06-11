
function rotate(value){
document.getElementById('divRotateBox').style.webkitTransform="rotate(" + value + "deg)";
document.getElementById('divRotateBox').style.msTransform="rotate(" + value + "deg)";
document.getElementById('divRotateBox').style.MozTransform="rotate(" + value + "deg)";
document.getElementById('divRotateBox').style.OTransform="rotate(" + value + "deg)";
document.getElementById('divRotateBox').style.transform="rotate(" + value + "deg)";
    var dollarboost=100-value/1.8 ;
    var tauboost =value/1.8 ;
document.getElementById('rotboost1').innerHTML="<b>$</b> " + dollarboost.toFixed(1)+"%";
document.getElementById('rotboost2').innerHTML="<b>ζ</b> " + tauboost.toFixed(1) +"%"; 
}