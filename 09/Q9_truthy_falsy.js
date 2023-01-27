// 09. Boolean value is either true or false.

// - Write three JavaScript statement example which provide truthy value.
// =>truthy values are those values which are considered true when encountred with boolean context. All the values are truthy unleass they define as falsy
const userName = 'Mayank';
let age = 22;
let learner = true;

if(userName){
    console.log(userName);
}
if(age){
    console.log(age);
}
if(learner){
    console.log(learner);
}



// - Write three JavaScript statement example which provide falsy value.

let zebra;
let age1 = 0;
let bird = false;

console.log("falsy values");

if(zebra){
    console.log(zebra);
}

if(age1){
    console.log(age1);
}

if(bird){
    console.log(bird);
}
console.log("falsy values are not reachable")
