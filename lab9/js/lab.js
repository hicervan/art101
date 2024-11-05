/**
 * Author:    Hilary
 * Created:   11.4.2024
 * 
 * This JavaScript file adds buttons to the divs in HTML.
 * 
 * Requirements: jQuery must be loaded to use these features.
 * (c) Creative commons
 **/

// Ensure the document is fully loaded before running the code
$(document).ready(function() {
  // Button for challenge
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");

  // Add a click listener to the challenge button
  $("#button-challenge").click(function() {
    // Now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
  });
});

// Ensure the document is fully loaded before running the code
$(document).ready(function() {
  // Button for challenge
  $("#classs").append("<button id='button-challenge'>Make Special</button>");

  // Add a click listener to the challenge button
  $("#button-challenge").click(function() {
    // Now add (or subtract) the "special" class to the section
    $("#classs").toggleClass("special");
  });
});

// Ensure the document is fully loaded before running the code
$(document).ready(function() {
  // Button for challenge
  $("#reflection").append("<button id='button-challenge'>Make Special</button>");

  // Add a click listener to the challenge button
  $("#button-challenge").click(function() {
    // Now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
  });
});