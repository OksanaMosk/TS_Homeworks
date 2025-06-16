// Завдання 1

let emptyArray = [];
let secondNumber = 1;

// Завдання 1а
while (emptyArray.length < 50) {
  if (secondNumber % 2 === 0) {
    emptyArray.push(secondNumber);
  }
  secondNumber++;
}
// Завдання 1b
let firstNumber = 0;

while (emptyArray.length < 100) {
  if (firstNumber % 2 !== 0) {
    emptyArray.push(firstNumber);
  }
  firstNumber++;
}

// Завдання 1c
while (emptyArray.length < 120) {
  let randomNumber = Math.floor(Math.random() * 1000);
  emptyArray.push(randomNumber);
  randomNumber++;
}

// Завдання 1d
while (emptyArray.length < 140) {
  let randomNumberOther = Math.floor(Math.random() * (732 - 8 + 1) + 8);
  emptyArray.push(randomNumberOther);
  randomNumberOther++;
}
console.log("Завдання 1:", emptyArray);

// Завдання 2
console.log("Завдання 2:");
for (let i = 2; i < emptyArray.length; i += 3) {
  console.log(emptyArray[i]);
}

// Завдання 3
console.log("Завдання 3:");
for (let i = 2; i < emptyArray.length; i += 3) {
  if (emptyArray[i] % 2 === 0) {
    console.log(emptyArray[i]);
  }
}

// Завдання 4
let newArray = [];
for (let i = 2; i < emptyArray.length; i += 3) {
  if (emptyArray[i] % 2 === 0) {
    newArray.push(emptyArray[i]);
  }
}
console.log("Завдання 4:", newArray);

// Завдання 5
console.log("Завдання 5:");
for (let i = 0; i < emptyArray.length; i++) {
  if (emptyArray[i + 1] % 2 === 0) {
    console.log(emptyArray[i]);
  }
}

// Завдання 6
let check = 0;
let averageCheck = 0;
let arrayShoping = [100, 250, 50, 168, 120, 345, 188];
for (let i = 0; i < arrayShoping.length; i++) {
  check += arrayShoping[i];
}
averageCheck = (check / arrayShoping.length).toFixed(2);

console.log(`Завдання 6: Average Check:" ${averageCheck} usd`);

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
