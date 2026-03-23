
//  11. reverse(), join() and split() methods of array and string
let arr3 = [1,2,3,4,5];
// let ans5=arr3.reverse();
// console.log(ans5 , arr3); // [ 5, 4, 3, 2, 1 ] [ 5, 4, 3, 2, 1 ] // reverse method reverses the original array and also returns the reversed array
//  sirf arr ko bhi print krte to reverse ho ke print hota kyuki  vo mutable hai aur vo store nahi krta hai ki pehle kya tha aur vo reverse krke hi rakhta hai it is called mutability

//JOIN
let ans5= arr3.join("");
console.log(ans5 , typeof ans5); // 12345 string  // join method joins the array elements and returns a string without modifying the original array
//  we give array and join function converts it into string

// split()
let str1 = "hello";
let ans6 = str1.split("");
console.log(ans6); // [ 'h', 'e', 'l', 'l', 'o' ]  // split method splits the string into an array of characters without modifying the original string
//  we give string and split function converts it into array of characters

// defualt parameter function 
 function add (x,y){
    console.log(x+y);
 }
 add(1,2); // 3
 add();// it will show undefined 
//   call baack and higher order function
function HOF(callback){ // this is higher order function kyukii ye greet ko apna argument le rha hai 
    console.log(1);
    callback();
    console.log(2);
}

function greet(){// ye call back fucntion kyuki ye kisi aur ka argument ban rha hai
    console.log(3);
}
HOF(greet); // 1 3 2


// Array higher order function methods- map, filter, reduce
let arr4 = [1,2,3,4,5]; 
// map
// let ans7 = arr4.map((el, index, array)=>{
//   console.log(el, index, array);
// });
let ans7 = arr4.map((el)=>{
    return el;
});
console.log(ans7); // [ 1, 2, 3, 4, 5 ]  // map method creates a new array by applying the provided function to each element of the original array 
//  for each 
let arr5 = [1,2,3,4,5];
arr5.forEach((el)=>{
    console.log(el);
});
console.log(arr5); // 1 2 3 4 5 [ 1, 2, 3, 4, 5 ]  // forEach method executes the provided function for each element of the array without returning a new array
let arr6 = [1,2,3,4,5];
// filter
let ans8 = arr6.filter((el)=>{
    return el%2===0;  
});
console.log(ans8); 


// sort()
let arr7 = [1,2,3,-4,-5];
let ans9 = arr7.sort((a,b)=>a-b); // ascending order
// let ans9 = arr7.sort((a,b)=>b-a); // descending order
console.log(ans9);
// reduce()
let arr8 = [1,2,3,4,5];
let ans10 = arr8.reduce((el, curr)=>{
    return el+curr},"");
console.log(ans10); // 15  // reduce method reduces the array to a single value by applying the provided function cumulatively to its elements
 


let ans11= "hello world";
let solve = ans11.split("").reverse().join("");
console.log(solve);
// let ans12= "world hello ";
