function alwaysHungry(arr) {
    var x=0;
    var y=0;
    while( x < arr.length){
        if(arr[x]== "food" ){
            console.log("yummy");
            y++;
        }
        x++;
    }
    if(y==0){
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i =0; i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


function betterThanAverage(arr) {
    var sum = 0;
    for(let i=0;i< arr.length;i++){
        sum+= arr[i];
    }
    var count = 0;
    var i=0;
    var avg = sum/arr.length;
    for(let i=0;i< arr.length;i++){
        if(arr[i]>avg){
            count++;
            }
    }

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function reverse(arr) {
    var rever = [];
    for (let i = arr.length-1; i>=0;i--){
        rever.push(arr[i]);
    }
    return rever;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var i=2;
    while (i<n){
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
        i++;
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
