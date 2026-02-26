// Asynchronous Programming (Welcome to Advanced concept of Js)

// Language - > medium to communicate
// Programming Language -> set of instruction that we give to the computer/m/c for
// generating various kind of output

// 2 type
    // High level Progg language - javascript, python
    // Low level Progg language - M/c code, binary language

// compilation process ->High level code is converted into low level code

    // compiled Progg language -> convert high to low in 1 go
    // Interpreted Progg  -> convert high to low in line by line and executed immediately 









// 1. Interpreted Progg language

// var name = "ram";
// console.log(name, typeof name);

// name = true;
// console.log(name, typeof name);


// name = 10;
// console.log(name,typeof name);






















//2. Dynamically Type Programming Language


// var name = "ram";
// console.log(name, typeof name);

// name = true;
// console.log(name, typeof name);


// name = 10;
// console.log(name,typeof name);















//3. Hoisting - 

// var -> undefined
// regular fn. -> fn ko memeory allot ho jata hai

// let x; // decleration
// x = 10; // assignment

// let x  = 20;

// console.log(x);


// console.log(name); // err

// var name = "hello";

// console.log(name); //hello

// console.log(age); // 25

// let age = 25;

// console.log(age); //25

// hello() // err, un

// function hello(){
//     console.log("hello");
    
// }

// hello() // hello


// add(); // un


// var add = ()=>{
//     console.log("hello");
    
// }


// add(); // he













 

//4. Lexical Scope in JS - > visibility/ accessibility


// hello()
// function hello(){
//     console.log(name); //err un
//     console.log("error"); // err

//     var name = "ram";
//     let age = 25;
    
//     console.log(name); // ram
//     console.log(age); // 25

//     if(true){
//         name = "shyam";
//         age = 21;

//     console.log(name); // shy
//     console.log(age);  // 21
//     }
    
//     console.log(name); // shy
//     console.log(age); // 21
// }


// hello()
// function hello(){
//     console.log(name); // un
//     console.log("error"); // error bcz of hoisting

//     if(true){
//     var   name = "shyam";
//     let  age = 21;

//     console.log(name); // shy
//     console.log(age);  // 21
//     }
    
//     console.log(name); // shy
//     console.log(age); // error bcz of lexical scope
// }












//5.  Execution Context

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
//     return "hello developers"
// }
// function two(){
//     console.log("error");
//     let age = 21;
//         console.log(three());
//     console.log(age);
    
// }
// console.log(two());
// console.log("end");
// one()





















// 5. Timer 

// console.log("start");


// setTimeout(() => {
//     console.log("mid");
    
// }, 5000);

// console.log("end");

// setInterval(()=>{
//     console.log("chup ho jao varna ...🔫");
    
// },3000)


















//6. Event Loop
// console.log("start");

// setInterval(()=>{
//     three()
// },10000)

// function one(){
//     console.log(name);
//     var name = "love";

//     return name;
//     console.log(three());
// }

// setTimeout(()=>{
//     console.log(one());
// },3000)

// function two(){
//     console.log(age);
//     var age = 25;
//     console.log(three());

//     return age;
// }

// function three(){
//     console.log("abb kyy hi bole...");
// }

// console.log("mid");

// setTimeout(()=>{
//     console.log(two());
// },5000)

// console.log("end");