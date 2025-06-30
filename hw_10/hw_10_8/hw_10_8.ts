let formGenerate: HTMLFormElement = document.forms.namedItem(
  "someForm"
) as HTMLFormElement;
let tableResult: HTMLTableElement = document.getElementById(
  "table"
) as HTMLTableElement;
let buttonGenerate: HTMLButtonElement = document.getElementsByTagName(
  "button"
)[0] as HTMLButtonElement;

formGenerate.onsubmit = function (e) {
  e.preventDefault();
  let linesValue: number = +formGenerate.lines.value;
  console.log(" linesValue :", linesValue);
  let cellsValue: number = +formGenerate.cells.value;
  console.log(" cellsValue:", cellsValue);
  let dataValue: string = formGenerate.data.value;
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
