"use strict";
let myFirstName = prompt("Enter Your Firstname");
if (myFirstName !== null) {
    console.log("myFirstName:", myFirstName);
}
let myLastName = prompt("Enter Your Lastname");
if (myLastName !== null) {
    console.log(" myLastName:", myLastName);
}
let age = prompt("Enter Your Age");
if (age !== null) {
    console.log(" age:", age);
}
if (myFirstName !== null && myLastName !== null && age !== null) {
    let myPerson = `I am ${myFirstName} ${myLastName}. I am ${age} years old.`;
    console.log(" myPerson :", myPerson);
}
