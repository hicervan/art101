/**
 * Author:    Hilary Cervantes with the help of chatGBT
 * Created:   10.27.2024
 * 
 * (c) Creative commons
 * **/

// Create a variable array
let littleG = [1, 2, 3, 4, 5];

// Create a function to add 100
function add100(n) {
   return n + 100;
}

console.log(add100(5));

// Manipulate the array with the add100 function
let results = littleG.map(add100);
console.log(results);

// Use an anonymous function to manipulate the array
let newResults = littleG.map(function(x) {
  return x - 2; 
});
console.log(newResults);  // Log the new results
