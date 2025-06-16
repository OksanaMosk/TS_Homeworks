let myInput = document.getElementById("input");
let divResult = document.getElementById("result");
myInput.oninput = function () {
  let kilos = +myInput.value;
  let myResult = kilos * 2.2;
  divResult.innerText = (kilos * 2.2).toFixed(2);
};
