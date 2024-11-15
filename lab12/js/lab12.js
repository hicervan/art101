/**
 * Author: Hilary Cervantes with the help of chatGBT
 * Created: 11.14.2024
 * 
 * Requirements: Jquery must be loaded for this code to work.
 * (c) Creative commons
 **/

function monster(str) {
  len = str.length;
  mod = len % 11;
  if (mod == 0) {
    return "Cyborg";
  }
  else if (mod == 1) {
    return "Human";
  }
  else if (mod == 2) {
    return "Reptilian";
  }  
  else if (mod == 3) {
    return "Vampire";
  }
  else if (mod == 4) {
    return "Draugar";
  }
  else if (mod == 5) {
    return "Werewolf";
  }
  else if (mod == 6) {
    return "Skinwalker";
  }
  else if (mod == 7) {
    return "Ghoul";
  }
  else if (mod == 8) {
    return "Alien";
  }  
  else if (mod == 9) {
    return "Succubus";
  }    
  else if (mod == 10) {
    return "Demon";
  }   
}

var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var secret = monster(name); // Pass name here, not type
  var newText = "<p>You have secretly been living as a " + secret + ".</p>"; // Use the correct variable name
  document.getElementById("output").innerHTML = newText; // Update the output element
});
