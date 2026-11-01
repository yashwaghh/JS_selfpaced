// const readlinesync = require("readline-sync");
// console.log("Hi please enter your age ");
// let age = Number(readlinesync.question("Please enter valid age "));
// if(age>=18){
//     console.log("You are now an adult ");
// }
// else{
//     console.log("You are not 18 years old yet please try again ");
// }
const readlinesync = require("readline-sync");
const userAge  = Number(readlinesync.question("Enter your age "));
if(userAge>18){
    if(userAge>65){
        console.log("You are too old to drive ");
    }
    else{
        console.log("You are eligible to drive ");
    }
}
else{
    console.log("Soryy you are not eligible to drive");
}
