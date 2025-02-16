//NUMBER CONVERSION

let score = "Nitish"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// Number("33")  => 33
// Number("33abc") => NaN
// Number(null)  => 0
// Number(undefined)  => NaN
// Number(true) => 1;  Number(false) => 0
// Number("ABC")  => NaN


//BOOLEAN CONVERSION

let isLoggedIn = "nitish"
let isLoggedOut = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedOut = Boolean(isLoggedOut)

//empty string to boolean conversion will give false
console.log(booleanIsLoggedIn);  // => true
console.log(booleanIsLoggedOut); // false

// 1 => true; 0 => false
// "" => false
// "nitish" => true


//STRING CONVERSION

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);




// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " nitish"

let str3 = str1 + str2
 console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

//tricky conversions (adding + as a suffix)
// console.log(+true); => 1
// console.log(+""); => 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion