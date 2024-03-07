// Primitive 

// 7 types : String ,Number,Boolean,Null,undefined,Symbol,BigInt

// JavaScript is a dynamically typed language. This means that the type of a variable is determined by the value it holds at runtime and can change throughout the program as we assign different values to them. There's no inbuilt way to annotate or restrict the types of variables.
// In contrast, statically typed languages require the programmer to declare the type of each variable before it is used. This allows the compiler to check for type errors and ensure that the program is type-safe.
// We do not define language in javascript
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId);
// In JavaScript, === is a comparison operator that checks the equality of two values without performing any type conversion
// The == operator in JavaScript is the equality operator. It checks if two values are equal.

// const bigNumber = 343534n
// Reference (Non primitive)

// Array,Objects,Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitwc",
    age: 43,
}

const myFunction= function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// **********************************************************************
// Memory type -Stack and Heap
// Stack(Primitive),Heap(Non-Primitive) 
// Non Primitive mein Original value ka reference milta hai
let myYoutubename = "hiteshchaudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ypl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);