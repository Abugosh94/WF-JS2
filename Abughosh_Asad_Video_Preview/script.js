console.log("page loaded...");

function hoveredVideo(element){
    element.muted = true;
}

var x=0;

function clickedVideo(element){

    if(x == 0){
        element.muted = false;
        x++;
    }

    else{
        element.muted = true;
        x--;
    }
}