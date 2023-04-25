//defining vars
var notification = document.querySelector(".cookieNotification");
var highTemp = document.querySelectorAll(".highTemp");
var lowTemp = document.querySelectorAll(".lowTemp");

//Removing the cookies notifcation when clicking on "I agree"
function removeNotification(){
    notification.remove();
}

//Converting temprature values depending on selection
function convertTemp(element){
    if(element.value == "℉"){
        for (let x=0; x<highTemp.length; x++ ){
            y = highTemp[x].innerText.split("°")
            highTemp[x].innerText = String(Math.round((Number(y[0]) * 9/5) + 32))+"°";
        }
        for (let x=0; x<lowTemp.length; x++ ){
            y = lowTemp[x].innerText.split("°")
            lowTemp[x].innerText = String(Math.round((Number(y[0]) * 9/5) + 32))+"°";
        }
    }
    if( element.value == "℃"){
        for (let x=0; x<highTemp.length; x++ ){
            y = highTemp[x].innerText.split("°")
            highTemp[x].innerText = String(Math.round((Number(y[0]) - 32) * 5/9))+"°";
        }
        for (let x=0; x<lowTemp.length; x++ ){
            y = lowTemp[x].innerText.split("°")
            lowTemp[x].innerText = String(Math.round((Number(y[0]) - 32) * 5/9))+"°";
        }
    }
}