function changeText(x){
    if(x.innerText == "Logout"){
        x.innerText = "Login";
    }
    else{
        x.innerText = "Logout";
    }
}

function numIncrease(x){
    y = x.innerText.split(" "); 
    y[0]=String((Number(y[0])+1));
    x.innerHTML = "<strong>"+y[0]+" "+y[1]+"</strong>";
}

function hideMe(x){
    x.style.visibility = "hidden";
}