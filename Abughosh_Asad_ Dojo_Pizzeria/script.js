function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza= {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings= toppings;
    return pizza;
}

dojoPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"]);
dojoPizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
mypizza = pizzaOven("thin crust", "marinara", ["mozzarella", "feta","cheddar" ],["mushrooms", "olives", "jalapenos"]);
mypizza2= pizzaOven("hand tossed", "traditional", ["mozzarella", "parmesan"],["olives"]);

function randomPizza(){
    var crustType;
    var sauceType;
    var cheeses;
    var toppings;
    //randomize crust
    var x= Math.floor(Math.random()*3)
    if(x ==0){
        crustType = "deep dish";
    }
    if(x ==1){
        crustType = "hand tossed";
    }
    if(x ==2){
        crustType = "thin crust";
    }
    //randomize sauce
    var x= Math.floor(Math.random()*2)
    if(x ==0){
        sauceType = "traditional";
    }
    if(x ==1){
        sauceType = "marinara";
    }

    //randomize type and number of cheeses
    var x= Math.floor(Math.random()*3)
    if(x ==0){
        cheeses = ["mozzarella"];
    }
    if(x ==1){
        var y= Math.floor(Math.random()*3)
        if(y ==0){
            cheeses = ["mozzarella","parmesan"];
        }
        if(y ==1){
            cheeses = ["mozzarella","feta"];
        }
        else{
            cheeses = ["mozzarella","cheddar"];
        }
    }
    if(x ==2){
        var y= Math.floor(Math.random()*3)
        if(y==0){
            cheeses = ["mozzarella","parmesan","cheddar"];
        }
        if(y ==1){
            cheeses = ["mozzarella","parmesan","feta"];
        }
        else{
            cheeses = ["mozzarella","cheddar","gouda"];
        }
    }

    //randomize the number and type of toppings
    var x= Math.floor(Math.random()*3)
    if(x == 0){
        toppings = ["mushrooms"];
    }
    if(x == 1){
        var y= Math.floor(Math.random()*3)
        if(y ==0){
            toppings = ["mushrooms","olives"];
        }
        if(y ==1){
            toppings = ["olives","jalapenos"];
        }
        else{
            toppings = ["pepperoni","sausage"];
        }
    }
    if(x == 2){
        var y= Math.floor(Math.random()*3)
        if(y ==0){
            toppings = ["mushrooms","jalapenos","pepperoni"];
        }
        if(y ==1){
            toppings = ["pepperoni","olives","jalapenos"];
        }
        else{
            toppings = ["sausage","olives","mushrooms"];
        }
    }
    return pizzaOven(crustType, sauceType, cheeses, toppings);
}
x= randomPizza();
y = randomPizza();
console.log(x);
console.log(y);