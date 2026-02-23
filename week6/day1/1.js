// asymcronous programming

// language -->  miduim to comunicate
// programming language ---> set of instruction that we give to computer/m/c for genrating various kind of output

// 2 type
// high level language progg language ---> javascript, python
// low level language ----> M/c code, binary language

// compiled progg language ------> cinvert high to low in 1 go
// Interpreted progg---> convcert high to low in line by line and exicuted imediately

// 1. intreprated language

// var name = "ram";
// console.log(name, typeof name);

// name= true;
// console.log(name, typeof name);

// name = 10;
// console.log(name, typeof name);

// 3.hosting // machanism in which var keyword se declare kiye gaye to aaap usko pehle bhi use kr sakte ho uske declare hone se pehle bhi
// var ---> undefined
//  regular fn -----> fn ko memeory  allot ho jata hai

// let x;  // devlaration
// x=10; // assignment

// console.log(name); // undefined

// var name = "hello"

// console.log(name); // hello





// 4. lexical scope in JS  -> visibility / accessibility 


// function hello() {
//     var name="priyanshu";
//     let age= 25;

//     console.log(name);
//     console.log(age);

//     if (true){
//         name="pandey";
//         age=21;
//         console.log(name);
//         console.log(age);
//     }
// console.log(name);
// console.log(age);
// }

// hello()


// 5.Execution 
// console.log(one());
// console.log("start");

// function one(){
//     console.log(name);
//     var name = "ram";

//     three();
//     console.log(name);
//     return "shyam"
// }

// console.log("mid");

// function three(){
// return " hello developers"
// }

// function two(){
//     console.log("error");
//     let age = 21;
//     console.log(three());
//     console.log(age);

// }
// console.log(two());
// console.log("end");
// one()

// 6. Timer 
// console.log("start");

// setTimeout(() => {
//     console.log("hello");
// }, 2000);

// console.log("end");


// setInterval(() => {
//     console.log("00:00 🚀");
// }, 2000);


// 7. Event loop
console.log("start");

setInterval(() => {
    three()
},10000)

function one(){
    console.log(name);
    var name = "priyanshu";

    return name;
    console.log(three());
}

setTimeout(() => {
    console.log(one());
}, 3000);

function two(){
    console.log(age);
    var age = 25;
    console.log(three());

    return age;

}
function three(){
    console.log("abb kya hi bolu ... ");

}

console.log("mid");
setTimeout(() => {
    console.log(two());
}, 5000);

console.log("end")