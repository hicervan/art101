/**
 * Author:    Hilary Cervantes & chatGBT
 * Created:   11.25.2024
 * 
 * Requirements: Jquery must be loaded for this code to work.
 * (c) Creative commons
 * **/
$(document).ready(function() {
    // Event listener for the button
    $('#activate').click(function() {
        // Using the core $.ajax() method
        $.ajax({               
            // The URL for the request (from the API docs)
            url: "https://api.chucknorris.io/jokes/random",
            // The data to send (we don't need any data for this specific API call)
            type: "GET",
            // The type of data we expect back
            dataType: "json",
            // What do we do when the API call is successful
            success: function(data) {
                // Accessing the 'value' field from the API response
                $('#output').text(data.value); // Display the joke in the 'output' div
            },
            // What do we do if the API call fails
            error: function(jqXHR, textStatus, errorThrown) {
                // Handle the error, if any
                console.log("Error:", textStatus, errorThrown);
                $('#output').text("Oops! Something went wrong.");
            }
        });
    });
});
