// take 3 strings as input and print the one with smallest letters 
const readlinesync = require("readline-sync");
const stringA = readlinesync.question("Enter the first string ");
const stringB = readlinesync.question("Enter the second string ");
const stringC = readlinesync.question("Enter the third string ");
if(stringA.length<stringB.length & stringA.length<stringC.length){
    console.log("String A is the Smallest  ");
}
else if(stringB.length<stringA.length & stringB.length<stringC.length){
    console.log(`String B i.e ${stringB} is the smallest `);
}
else{
    console.log("StringC is the smallest ");
}