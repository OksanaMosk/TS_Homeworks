"use strict";
let firstStringNumber = prompt("Enter the first number");
let secondStringNumber = prompt("Enter the second number");
if (firstStringNumber !== null && secondStringNumber !== null) {
    const secondNumber = +secondStringNumber;
    const firstNumber = +firstStringNumber;
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log("Please enter valid numbers.");
    }
    else {
        if (firstNumber > secondNumber) {
            console.log(firstNumber);
        }
        else if (firstNumber < secondNumber) {
            console.log(secondNumber);
        }
        else {
            console.log(firstNumber);
        }
    }
}
