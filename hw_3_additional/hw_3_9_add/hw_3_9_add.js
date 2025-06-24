"use strict";
let arrayAdd39 = [
    1000,
    "juice",
    null,
    false,
    "tea",
    NaN,
    undefined,
    true,
    "strawberry",
    123567,
];
for (let i = 0; i < arrayAdd39.length; i++) {
    if (typeof arrayAdd39[i] === "string") {
        console.log(arrayAdd39[i]);
    }
}
