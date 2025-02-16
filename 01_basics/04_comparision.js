// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // => false => the reason is comparsions (>,>=,<,<=) converts null to a number 0 
console.log(null == 0); // => false
console.log(null >= 0); // => true => the reason is comparsion checks (>,>=,<,<=) converts null to a number 0

//always gives fales 
console.log(undefined == 0); 
console.log(undefined > 0);
console.log(undefined < 0);

// when we use === it does not convert values it's checks data types also 
console.log("2" == 2); // => true => data conversion method 
console.log("2" === 2); // => false => checking data types also