// object data type

// 1. combonation  of key value pairs
// 2. key is always str data only and the value data type can be be of any type 
// 3. key are unique  and value ay be duplicate


// 1. Create 
 let person ={
    name : "John",
    age : 30,
    active : true, 
    name : "Priyanshu",
 };

//  2. Read
 console.log(person);
// 3. Update
 //   bracket notation
 person["Status"]= false

//  dot notation
 person.age=31;

 console.log(person);

//  4. Delete
delete person["name"];
console.log(person);

