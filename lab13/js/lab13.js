/**
 * Author:    Hilary Cervantes & chatGBT
 * Created:   11.18.2024
 * 
 * Requirements: Jquery must be loaded for this code to work.
 * (c) Creative commons
 * **/

        // Function to loop through numbers 1 to 200 and handle Fizz, Buzz, Boom
        function fizzBuzzBoom() {
            var oneLongString = "";  // Initialize the string that will hold our output

            // Loop through numbers from 1 to 200
            for (var num = 1; num <= 200; num++) {
                var output = "";  // Initialize a variable to hold the current output for the number

                // Check if the number is a multiple of 3, 5, and/or 7 and append the appropriate strings
                if (num % 3 === 0) output += "Fizz";
                if (num % 5 === 0) output += "Buzz";
                if (num % 7 === 0) output += "Boom";

                // If there is no "Fizz", "Buzz", or "Boom", we just output the number itself
                if (output === "") output = num;

                // Add the output for the current number, followed by a line break
                oneLongString += output + "<br>";
            }

            // Finally, output all the results to the #output div
            $("#output").html(oneLongString);
        }

        // Call the function to run when the page loads
        $(document).ready(function() {
            fizzBuzzBoom();
        });