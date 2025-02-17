// Immediately Invoked Function Expressions (IIFE)
// ()()   Write your function definition in first parenthesis and second parenthesis is used for funtion execution call


(function chai(){     // named IIFE
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // always add semicolon to end IIFE call

( (name) => {   // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh'); //passing name variable 

