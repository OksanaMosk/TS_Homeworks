"use strict";
const writer58 = (array) => {
    document.write("<ul>");
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write("</ul>");
};
writer58([
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
]);
