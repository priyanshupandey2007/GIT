let obj={
    a:1,
    b:2
}
console.log(obj["b"]);

for(let key in obj ){
 console.log(key);  // ye key value ko dhundta hai 

console.log(obj[key]); // ye bhi key value ko dhundta hai 
console.log(obj.key); // but is wale case mein vo key name ke key value ko dhundta hai joki exist nahi karti isliye undefined aayega
console.log(obj["key"]);// ye bhi undefined dega kyuki obj mein key naam ka koi key exist nahi karta
}