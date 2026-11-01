const readlineSync = require('readline-sync');
const n = readlineSync.question("Enter your name");
console.log(n);

const obj = {
    nameOfPerson : n,
    greetMessage: function(){
        console.log(this.nameOfPerson);
    },
    Bye(){
        console.log("Bye");
    }//second way to create a function in an object
    
}
obj.greetMessage();
console.log(obj);
obj.Bye();