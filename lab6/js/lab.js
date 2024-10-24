/**
 * Author:    Hilary
 * Created:   10.23.2024
 * 
 * (c) Creative commons
 * **/

//Variables
myTransport = ["car", "legs", "bus", "bike"];

//Object
myMainRide = {
    make: "honda",
    model: "civic",
    color: "blue",
    year: 2010,
    age: function() {
      return 2024 - this.year;
    }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");