let formGenerate = document.forms["someForm"];
let tableResult = document.getElementById("table");
let buttonGenerate = document.getElementsByTagName("button");

formGenerate.onsubmit = function (e) {
  e.preventDefault();
  let linesValue = +formGenerate.lines.value;
  console.log(" linesValue :", linesValue);
  let cellsValue = +formGenerate.cells.value;
  console.log(" cellsValue:", cellsValue);
  let dataValue = formGenerate.data.value;
  console.log("  dataValue :", dataValue);

  tableResult.innerHTML = "";
  for (let i = 0; i < linesValue; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cellsValue; j++) {
      const td = document.createElement("td");
      td.innerText = dataValue;
      tr.appendChild(td);
    }
    tableResult.appendChild(tr);
  }
};
