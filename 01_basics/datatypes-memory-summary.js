//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "nitish",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//MEMORIES 

// Primitive uses Stack memory

let name1="abc"
let name2= name1

name2="xyz"

console.log(name1) // => abc
console.log(name2)// => xyz

// Non-Piemitive use Heap Memory

let user1={
    name:'abc',
    age:22
}

let user2 = user1

user2.name='xyz'

console.log(user1.name) // => xyz value of user1 also changes because heap uses reference 

console.log(user2.name) // => xyz
