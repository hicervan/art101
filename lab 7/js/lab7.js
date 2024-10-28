/**
 * Author:    Hilary
 * Created:   10.27.2024
 * 
 * (c) Creative commons
 * **/

//function
function sortUserName() {
    var userName = window.prompt("Please enter your name here.");
    console.log("userName=", userName);
//split the array
    var nameArray = userName.split('');
    console.log("nameArray=", nameArray );
//sort the array
    var sortNameArray = nameArray.sort();
    console.log("sortNameArray=", sortNameArray);
//join array back to string 
    var nameSorted = sortNameArray.join('');
    console.log("nameSorted=", nameSorted);

    return nameSorted;

}
//output
document.writeln("I think you needed a new one: ", 
      sortUserName(), "</br>"); 