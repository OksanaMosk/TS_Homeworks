"use strict";
let localString = localStorage.getItem("number");
localString !== null ?
    let : ;
currentNumber: number = +localStorage.getItem("number");
currentNumber += 1;
localStorage.setItem("number", currentNumber);
let block = document.getElementsByTagName("div")[0];
block.innerText = currentNumber;
