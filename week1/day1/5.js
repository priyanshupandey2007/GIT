// =======[ ES6 Concepts]========


// 1. destructuring in js

//  let arr=[1,2,3,4,5];

//   let[a,b,c,d,e]=arr // ye array ke index ko dhundta hai
//   console.log(a,b,c,d,e); // 1 2 3 4 5

 let obj={a:1,b:2,c:3,d:4,e:5}; // ye object ke key ko dhundta hai
 let{a,b,c,d,e}=obj 
 console.log(a,b,c,d,e); // 1 2 3 4 5

//  2. type conversion
 let num= "123";
 let ans1= Number(str); // str to number
 console.log(ans1,typeof ans1); // 123 'number'

 let ans2= +str; // str to number
 console.log(ans2,typeof ans2); // 123 'number'

 let ans3= parseInt(str); // str to number
 console.log(ans3,typeof ans3); // 123 'number'

 let ans4= String(num); // number to string
 console.log(ans4,typeof ans4); // '123' 'string'

 let ans5= num.toString(); // number to string
 console.log(ans5,typeof ans5); // '123' 'string'           

//  3. falsy values in js
    //  1. 0                
    //  2. "" (empty string)
    //  3. null
    //  4. undefined
    //  5. NaN
    //  6. false



    if(101){
        console.log(1);
        }
    else{
        console.log(2);
    }


        // AND OPERATOR 
        // And operator always search for falsy value and return it and if it does not found any falsy value then it gives last value as a result 

        //  OR OPER`ATOR
        // OR operator always search for truthy value and return it and if it does not found any truthy value then it gives last value as a result

        console.log("ram" && "shyam"); // shyam
        console.log("ram" || "shyam"); // ram
        