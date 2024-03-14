
// const b = 20

//{}--scopes

//if(true){} --iske bahar jo bhi likhoge woh global scope hain

let a =300
if(true){  
    let a = 10   //Block Scope
    const b = 20  //Block Scope
//    console.log("INNER:",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);

//  ++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++

console.log(addone(5)); 
function addone(num){
    return num+1
}

addTwo(5)
const addTwo = function(num){
    return num +2
}


