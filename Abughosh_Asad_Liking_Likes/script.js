
function likeIncreaseCard1(){
    var x = document.querySelector("#card1");
    y = x.innerText.split(" "); 
    y[0]=String((Number(y[0])+1));
    x.innerText = y[0]+" "+y[1];
}



function likeIncreaseCard2(){
    var x = document.querySelector("#card2");
    y = x.innerText.split(" "); 
    y[0]=String((Number(y[0])+1));
    x.innerText = y[0]+" "+y[1];
}



function likeIncreaseCard3(){
    var x = document.querySelector("#card3");
    y = x.innerText.split(" "); 
    y[0]=String((Number(y[0])+1));
    x.innerText = y[0]+" "+y[1];
}
