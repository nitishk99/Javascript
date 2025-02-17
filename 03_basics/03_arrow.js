const user = {
    username: "nitish",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //=> {}



// function chai(){
//     let username = "nitish"
//     console.log(this.username); // => undefined (can't access like this)
// }
// chai()

// const chai = function () {
//     let username = "nitish"
//     console.log(this.username); // => undefined (can't access like this)
// }
// chai()

//Arrow function
const chai =  () => {
    let username = "nitish"
    console.log(this);      // => undefined (can't access like this)
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//if currly braces is used need to add return
 const addTwo1 = (num1, num2) =>  num1 + num2  // only valid for one line code

 const addTwo2 = (num1, num2) => ( num1 + num2 ) // only valid for one line code

const addTwo3 = (num1, num2) => ({username: "nitish"}) // only valid for one line code



console.log(addTwo1(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()