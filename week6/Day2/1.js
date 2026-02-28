// promise is most important for mid term 



// 7. clousers ->  function + its lexical scope of varibale 
//  Encapsulation in js is achived by clousers 
// function outer(){
// let count = 0;
//   function inner (){
//     count++;
//     console.log(count);
// }
// }

// let ans = outer();
// ans()
// ans()
// ans()


//  8.Curring 

// function add(a){
//      return function(b){
//        return   function(c){
//             return  function(d){
//              return    a+b+c+d;
//             }
//         }
//     }
// }

// let ans = add(1)(2)(3)(4);
// console.log(ans);

// arrow function
// const add = (a)=>(b)=>(c)=>(d)=>a+b+c+d;
 
// let ans = add(1)(2)(3)(4);
// console.log(ans);

// promises -> A promises is an object that may produce a single value some time in the future: either a resolved value or a reason that it's not resolved that it's not resolved 
// 3 states of promises :   pending , fullfilled , rejected
