"use strict";
function sum(arr) {
    let result = 0;
    for (const element of arr) {
        result += element;
    }
    console.log(result);
    return result;
}
sum([6, 30, 50, 10, 4]);
