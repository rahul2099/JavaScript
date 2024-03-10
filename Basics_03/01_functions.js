


// function saymyName(){
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");
// }

// saymyName() //function reference

// function addTwoNumbers(number1,number2){  //(number1,number2)---Parameters
//  console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){  //(number1,number2)---Parameters
 
    // let result = number1 +number2  
    // return result   // return ke baad kuch bhi print nahi hota hai
    return number1+number2
}

const result = addTwoNumbers(3,5)  //(3,4)--Argument

// console.log("Result: ",result);

function loginUserMessage(username = "sam"){
    if(username === undefined){   //username === undefined or !username
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")); 

function calculateCartPrice(val1,val2,...num1){  //(...num1)--Rest Operator
    return num1
}

console.log(calculateCartPrice(200,400,600,60506)); 

const user = {
    username: "hitesh",
    price: 4534
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,200,600]

function returnSecondValue(getArray){
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,200,600]));