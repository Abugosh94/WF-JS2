var display = document.querySelector("#display");
var op;
var nums= [];
var numCounter = 0;
var result=0;

//changing display text based on chosen number
function press(x){
    if((display.innerText == "0" || (numCounter==0 || numCounter==2) )){
        display.innerText = "";
        numCounter++;
    }
    display.innerText += x;
}

//setting operator and pushing the number in display into an array
function setOP(x){
    if (numCounter>1){
        calculate();
    }
    op=x;
    nums.push(Number(display.innerText));
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
        for(let i = 0; i<nums.length; i++){
            if (op == "+"){
                result = nums[i]+nums[i+1];
                break;
            }
            if (op == "-"){
                result = nums[i]-nums[i+1];
                break;
            }
            if (op == "/"){
                result = nums[i]/nums[i+1];
                break;
            }
            if (op == "*"){
                result = nums[i]*nums[i+1];
                break;
            }
        }
    }
    //calculate result and the new number
    else{
        for(let i = 2; i<nums.length; i++){
            if (op == "+"){
                result += nums[i];
                break;
            }
            if (op == "-"){
                result -= nums[i];
                break;
            }
            if (op == "/"){
                result /= nums[i];
                break;
            }
            if (op == "*"){
                result *= nums[i];
                break;
            }
        }
    }
    //resets numbs and places result on index 0 for further calculations
    nums= [];
    nums[0] = result;
    numCounter = 1;
    display.innerText = result;
}