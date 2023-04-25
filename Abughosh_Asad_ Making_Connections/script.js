console.log("page loaded...");

function hideImg1(){
    var x = document.querySelector("#item1");
    var y = document.querySelector("#requestsNumber");
    y.innerText = (String((Number(y.innerText)-1)))
    x.remove();
}

function hideImg2(){
    var x = document.querySelector("#item2");
    var y = document.querySelector("#requestsNumber");
    y.innerText = (String((Number(y.innerText)-1)))
    x.remove();
}

function changeName(){;
    var x = document.querySelector("#profName");
    x.innerText = "Any other name";
}

function increaseConnections(){
    var x = document.querySelector("#connectionNumber");
    y = x.innerText.split("+");
    x.innerText = (String((Number(y[0])+1)))+"+";
}