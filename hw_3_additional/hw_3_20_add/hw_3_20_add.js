"use strict";
let emptyArrayAdd320 = [];
while (emptyArrayAdd320.length < 10) {
    let randomNumber = Math.floor(Math.random() * 30);
    emptyArrayAdd320.push(randomNumber);
}
console.log("emptyArrayAdd320:", emptyArrayAdd320);
let newArrayAdd320 = [];
for (let i = 0; i < emptyArrayAdd320.length; i++) {
    newArrayAdd320.push(emptyArrayAdd320[i]);
}
console.log("newArrayAdd320:", newArrayAdd320);
