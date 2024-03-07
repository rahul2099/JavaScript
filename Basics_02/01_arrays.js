// arrays
// [] -Square Brackets
// ()- Parenthesis
// {}-Braces
// // Javascript arrays are resizable
// Shallow Copy-of an object whose properties share the same references
// Matlab Agar Hum change karenge woh original array mein bhi change hoga 
// Deep Copy-an object is a copy whose properties do not share the same reference
const myArr = [0,1,2,3,4,6]
const myHeroes = ["gogo","shaktiman"]
const myArr2 = new Array(1,3,4,5,4)
// console.log(myArr[2]);

// Array Methods
// Push values ko add karta hai
// Pop simply Last value ko remove kar deta hai
// myArr.push(6)
// myArr.push(9)
// myArr.pop()
// unshift simply value ko first position pe add kar deta hai 
// shift first value ko remove kar deta hai
// myArr.unshift(3)
// myArr.shift()
// includes batata hai ki value sahi hai ya galat
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);
// Splice Original array ko manipulate karta hai

