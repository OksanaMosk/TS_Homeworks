"use strict";
let myInput = document.getElementById("input");
let divResult = document.getElementById("result");
myInput.oninput = function () {
    let kilos = +myInput.value;
    if (!isNaN(kilos)) {
        divResult.innerText = (kilos * 2.2).toFixed(2);
    }
    else {
        divResult.innerText = "Please enter a valid number";
    }
};
