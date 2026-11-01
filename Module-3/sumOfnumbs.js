try{readlinesync = require("readline-sync")
const sumofNumbers = function(array){
    const size = array.length
    let sum =0;
    for(let i=0; i<size; i++){
        sum+=array[i];
    }
    return sum;
}
function getArray(size){
    let array = [];
    for(let i=0; i<size; i++){
        array[i] = Number(readlinesync.question(`Enter the value ${i} : `))
    }
    return array;
}
let array = [];
let size = Number(readlinesync.question("enter the size of array: "))
let output = sumofNumbers(getArray(size));
console.log(output);
}
catch(error){
    console.log(error.message);
}