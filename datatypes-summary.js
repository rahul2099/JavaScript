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