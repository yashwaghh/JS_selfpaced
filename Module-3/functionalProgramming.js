// function greeting(){
//     console.log("Hello from geeks for geeks ");
//     throw error
// }
// try{
//     greeting();
// }
// catch(error){
//     console.log("Error occcured");
// }
// function sayHello(name){
//     console.log(`welcome ${name} Nice meeting you `);
// }
// readlineSync = require("readline-sync");
// const name = readlineSync.question("Please enter your name ")
// sayHello(name);
//Function to calculate sum in array 
function calculateSum(array){
    let sum =0;
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }
    console.log(sum);
}
let array = [1,2,3,4,5,6,7];
try{
    calculateSum(array);
}
catch(error){
    console.log(error.message);
}