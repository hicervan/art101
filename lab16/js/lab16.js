// This JavaScript file fetches data from the XKCD API and adds it to the webpage
// Author: Hilary Cervantes and chat GBT 
// Date: 12/2/2024
// This JavaScript file fetches a random 'Yes' or 'No' answer from the YesNo API
// Author: Your Name
// Date: Today's Date

$(document).ready(function() {
    // Use $.ajax() to retrieve data from the YesNo API
    $.ajax({
        // The URL for the request (from the API docs)
        url: "https://yesno.wtf/api", 
        
        // The type of data we expect back
        dataType: "json", 
        
        // What do we do when the API call is successful
        success: function(comicObj) {
            // Log the comic object to the console for debugging
            console.log(comicObj);

            // Create a section element to hold the comic
            var responseSection = $('<section></section>');

            // Create a title using the comicObj.answer (Yes or No)
            var responseTitle = $('<h2></h2>').text('Answer: ' + comicObj.answer);
            responseSection.append(responseTitle);

            // Create an image element using the comicObj.image
            var responseImage = $('<img>')
                .attr('src', comicObj.image)          // Set the image source
                .attr('alt', comicObj.answer)         // Set the alt text (Yes or No)
                .attr('title', comicObj.answer);      // Set the title attribute to be the same as the answer
            responseSection.append(responseImage);

            // Append the section to the body of the webpage (or a specific div)
            $('#comic-container').append(responseSection);
        },
        
        // What do we do if the API call fails
        error: function(jqXHR, textStatus, errorThrown) {
            // Log error details to the console
            console.log("Error:", textStatus, errorThrown);
        }
    });
});