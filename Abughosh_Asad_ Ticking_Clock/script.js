var secCss = document.querySelector("#seconds");
var minutesCss = document.querySelector("#minutes");
var hoursCss = document.querySelector("#hour");

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    secCss.style.transform= "rotate("+time*6+"deg)";
}, 1000);