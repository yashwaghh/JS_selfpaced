const obj = {
    name:'Yash',
    age:15,
    pid:21,
    'is admin':'true'
};
console.log((obj.pid));

//this can be used when we have two or more words as the key because on normal ways the js throws an error 

console.log(obj['is admin']);
