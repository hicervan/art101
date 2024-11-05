/**
 * Author:    Hilary
 * Created:   10.27.2024
 * 
 * (c) Creative commons
 * **/

//function
//create a variable array
let littleG = [1,2,3,4,5]

//create a function add 100
function add100(n) {
   return n+100;
}

console.log(add100(5));

//manipulate your varible array with your function add 100
let results = littleG.map(add100);
console.log(results);

//use an anonymous function to manipulate your array
littleG.map(function(x) {
  return x-2; 
})

console.log(little.G);
