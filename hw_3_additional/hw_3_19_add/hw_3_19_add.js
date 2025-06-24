"use strict";
let emptyArrayAdd319 = [];
while (emptyArrayAdd319.length < 10) {
    let randomNumber = Math.floor(Math.random() * 30);
    emptyArrayAdd319.push(randomNumber);
}
console.log("emptyArrayAdd319:", emptyArrayAdd319);
for (let i = 0; i < emptyArrayAdd319.length; i++) {
    if (emptyArrayAdd319[i] % 2 === 0) {
        console.log("Елемент, значення якого є парним:", emptyArrayAdd319[i]);
    }
}
