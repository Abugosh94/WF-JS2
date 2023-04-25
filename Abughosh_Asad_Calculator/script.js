var display = document.querySelector("#display");
var op;
var nums= [];
var numCounter = 0;
var result=0;

//changing display text based on chosen number
function press(x){
    if((display.innerText == "0" || (numCounter==0 || numCounter%2==0) )){
        display.innerText = "";
        numCounter++;
    }
    display.innerText += x;
}

//setting operator and pushing the number in display into an array
function setOP(x){
    op=x;
    nums.push(Number(display.innerText));
    if (numCounter>1){
        calculate();
    }
    numCounter++;
}

//reseting display, result numCounter and numbers array
function clr(){
    display.innerText = "0";
    numCounter = 0;
    result =0;
    nums= [];
}

function calculate(){
    nums.push(Number(display.innerText));
    numCounter++;
    //calculating the first 2 numbers
    if (result == 0){
            if (op == "+"){
                result = nums[0]+nums[1];
            }
            if (op == "-"){
                result = nums[0]-nums[1];
            }
            if (op == "/"){
                result = nums[0]/nums[1];
            }
            if (op == "*"){
                result = nums[0]*nums[1];
            }
    }
    //calculate result and the new number
    else{
            if (op == "+"){
                result += nums[1];
            }
            if (op == "-"){
                result -= nums[1];
            }
            if (op == "/"){
                result /= nums[1];
            }
            if (op == "*"){
                result *= nums[1];
            }
    }
    //resets numbs and places result on index 0 for further calculations
    nums= [];
    numCounter = 1;
    display.innerText = result;
}