"use strict";
let localString = localStorage.getItem("number");
let currentNumber = localString !== null ? +localString : 0;
currentNumber += 1;
localStorage.setItem("number", currentNumber.toString());
let block = document.getElementsByTagName("div")[0];
block.innerText = currentNumber.toString();
