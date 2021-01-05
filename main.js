let readlineSync = require('readline-sync');

let meal = readlineSync.question("Give me the meal...Input burger,pizza or hotdog ");


Burger=5;
Pizza=3;
HotDog=1.5
if(meal==="burger"){
    console.log(`Burger ${Burger}$`)
}
else if (meal==="pizza"){
    console.log(`Pizza ${Pizza}$`)
}
else if(meal==="hotdog"){
    console.log(`HotDog ${HotDog}$`)
}
