"use strict";
// Завдання 1
let emptyArrayAdd317 = [];
let secondNumber = 1;
// Завдання 1а
while (emptyArrayAdd317.length < 50) {
    if (secondNumber % 2 === 0) {
        emptyArrayAdd317.push(secondNumber);
    }
    secondNumber++;
}
// Завдання 1b
let firstNumber = 0;
while (emptyArrayAdd317.length < 100) {
    if (firstNumber % 2 !== 0) {
        emptyArrayAdd317.push(firstNumber);
    }
    firstNumber++;
}
// Завдання 1c
while (emptyArrayAdd317.length < 120) {
    let randomNumber = Math.floor(Math.random() * 1000);
    emptyArrayAdd317.push(randomNumber);
    randomNumber++;
}
// Завдання 1d
while (emptyArrayAdd317.length < 140) {
    let randomNumberOther = Math.floor(Math.random() * (732 - 8 + 1) + 8);
    emptyArrayAdd317.push(randomNumberOther);
    randomNumberOther++;
}
console.log("Завдання 1:", emptyArrayAdd317);
// Завдання 2
console.log("Завдання 2:");
for (let i = 2; i < emptyArrayAdd317.length; i += 3) {
    console.log(emptyArrayAdd317[i]);
}
// Завдання 3
console.log("Завдання 3:");
for (let i = 2; i < emptyArrayAdd317.length; i += 3) {
    if (emptyArrayAdd317[i] % 2 === 0) {
        console.log(emptyArrayAdd317[i]);
    }
}
// Завдання 4
let newArray = [];
for (let i = 2; i < emptyArrayAdd317.length; i += 3) {
    if (emptyArrayAdd317[i] % 2 === 0) {
        newArray.push(emptyArrayAdd317[i]);
    }
}
console.log("Завдання 4:", newArray);
// Завдання 5
console.log("Завдання 5:");
for (let i = 0; i < emptyArrayAdd317.length; i++) {
    if (emptyArrayAdd317[i + 1] % 2 === 0) {
        console.log(emptyArrayAdd317[i]);
    }
}
// Завдання 6
let check = 0;
let averageCheck = "0";
let arrayShoping = [100, 250, 50, 168, 120, 345, 188];
for (let i = 0; i < arrayShoping.length; i++) {
    check += arrayShoping[i];
}
averageCheck = (check / arrayShoping.length).toFixed(2);
console.log(`Завдання 6: Average Check: ${averageCheck} usd`);
// Завдання 7
let randomArray = [];
while (randomArray.length < 10) {
    let randomArrayNumber = Math.floor(Math.random() * 10);
    randomArray.push(randomArrayNumber);
}
console.log("Завдання 7:", randomArray);
let newRandomArray = [];
for (let i = 0; i < randomArray.length; i++) {
    let newRandomArrayNumber = randomArray[i] * 5;
    newRandomArray.push(newRandomArrayNumber);
}
console.log("newRandomArray:", newRandomArray);
// Завдання 8
let lastArray = [
    1000,
    "juice",
    777,
    null,
    1268,
    "tea",
    NaN,
    undefined,
    true,
    "strawberry",
    123567,
];
let newLastArray = [];
for (let i = 0; i < lastArray.length; i++) {
    if (typeof lastArray[i] === "number" && !isNaN(lastArray[i])) {
        newLastArray.push(lastArray[i]);
    }
}
console.log("Завдання 8", newLastArray);
