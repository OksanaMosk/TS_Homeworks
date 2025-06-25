"use strict";
function whatIsSmallestNumber(array) {
    if (array.length === 0)
        throw new Error("Array is empty");
    let smallestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }
    console.log(smallestNumber);
    return smallestNumber;
}
whatIsSmallestNumber([5, 9, 6, 0, -3, 2, 3]);
