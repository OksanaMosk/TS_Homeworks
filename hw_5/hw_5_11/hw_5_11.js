"use strict";
const sum511 = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log(result);
    return result;
};
sum511([6, 30, 150, 110, 4]);
