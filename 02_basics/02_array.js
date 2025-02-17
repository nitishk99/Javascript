const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 marvel_heros.push(dc_heros) // will push whole dc-heros array at last element // will push in same array
 console.log(marvel_heros);
 console.log(marvel_heros[3][1]);

 const allHeros = marvel_heros.concat(dc_heros) // will push dc-heros array element one by one // will return a new array

 console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const real_another_array = another_array.flat(Infinity) // will return in single array depending on depth passed in function
console.log(real_another_array);



console.log(Array.isArray("Nitish")) // false
console.log(Array.from("Nitish")) // convert to array
console.log(Array.from({name: "nitish"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // will return array of values 