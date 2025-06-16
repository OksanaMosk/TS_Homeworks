let currentNumber = +localStorage.getItem("number");

currentNumber += 1;

localStorage.setItem("number", currentNumber);

let block = document.getElementsByTagName("div")[0];
block.innerText = currentNumber;
