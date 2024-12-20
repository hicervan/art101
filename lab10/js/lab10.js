/**
 * Author:    Hilary Cervantes with the help of chatGBT
 * Created:   11.5.2024
 * 
 * Requirements: Jquery must be loaded for this code to work.
 * (c) Creative commons
 * **/

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // Get new fake dialogue on click
  const newText = generateRandomText();

  // Append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

