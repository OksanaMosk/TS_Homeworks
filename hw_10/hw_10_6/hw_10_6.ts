let myInput: HTMLInputElement = document.getElementById(
  "input"
) as HTMLInputElement;
let divResult: HTMLDivElement = document.getElementById(
  "result"
) as HTMLDivElement;
myInput.oninput = function () {
  let kilos: number = +myInput.value;

  if (!isNaN(kilos)) {
    divResult.innerText = (kilos * 2.2).toFixed(2);
  } else {
    divResult.innerText = "Please enter a valid number";
  }
};
