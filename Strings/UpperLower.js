let message  = "I love to code ";
console.log(message.toLowerCase());
console.log(message.toUpperCase());
//checking for vowels 
let string1 = "I love to code a lot ";
const vowels = "aeiou";

flag = false;
for(let i=0; i<=string1.length;i++){
    string1.toLowerCase();
    if(vowels.includes(string1[i])){
        flag = true;
        break;
    }
    else {
        flag = false;
    }
}

if(flag){
    console.log("Has a vowel ");
}
else{
    console.log("Doenest have a vowel");
    
}