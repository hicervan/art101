/**
 * Author:    Hilary Cervantes
 * Created:   11.11.2024
 * 
 * Requirements: Jquery must be loaded for this code to work.
 * (c) Creative commons
 * **/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();   
    // now let's sort it
    userNameSorted = sortString(userName);
    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });

