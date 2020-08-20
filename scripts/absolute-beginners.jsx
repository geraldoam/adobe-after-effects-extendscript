/* 

    Absolute Beginners ExtendScript Tutorial

*/

/* START POINT */

//  Variables
var myVariable = "Hello my friend!";
var myVariableIsCoolBeLikeThis = true;

//  Alert
alert(myVariable);

// Array
var myArray = ["one", "two", "three", 4];

// Functions
function myFunction(){
    // something
};


/* TO GET OBJECT INFORMATION FROM AFTER EFFECTS */
var selectd = app.project.activeItem.selectdProperties; // we can select a lot of elements, it's return an array.
alert(selected[0].value);
