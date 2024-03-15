const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// console.log(this);
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
//  6:21
// this ---->current context ko refer karta hai 