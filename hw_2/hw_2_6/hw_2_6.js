"use strict";
let strValue = prompt("Enter number");
if (strValue !== null) {
    let numValue = +strValue;
    if (isNaN(numValue)) {
        console.log("Please enter a valid number.");
    }
    else if (numValue !== 0) {
        console.log("right");
    }
    else {
        console.log("wrong");
    }
}
