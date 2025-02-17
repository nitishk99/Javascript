// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Nitish",
    "full name": "Nitish Kumar",
    [mySym]: "mykey1", // when using symbol values
    age: 18,
    location: "Jaipur",
    email: "nitish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
//second method to access object values
console.log(JsUser["email"]) 
console.log(JsUser["full name"])// useful in this kind of key names
console.log(JsUser[mySym])

JsUser.email = "nitish@chatgpt.com"
 Object.freeze(JsUser) // it freezes the object, means we can't update it's values
JsUser.email = "nitish@microsoft.com" // it will not update
 console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());