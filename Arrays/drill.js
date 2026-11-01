const readlineSync = require('readline-sync');
const sizeinput = readlineSync.question("Enter the size : ");
let arr = ['1','2','3','4','5'];
if(arr.includes(sizeinput)){
    console.log("Available");
}
else{
    console.log("Unavaialable");
}