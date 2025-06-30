let sessionsList10Grn: number[] = JSON.parse(
  localStorage.getItem("sessionsList10Grn") || "[]"
);
let date = new Date();
let secconds: number = Math.floor(date.getTime() / 1000);
sessionsList10Grn.push(secconds);
localStorage.setItem("sessionsList10Grn", JSON.stringify(sessionsList10Grn));

let startNumber: number = 100;
let sum109: number = 100;

for (let i = 1; i < sessionsList10Grn.length; i++) {
  if (sessionsList10Grn[i] - sessionsList10Grn[i - 1] >= 10 || i === 1) {
    sum109 += 10;
  }
}
let block109: HTMLDivElement = document.getElementsByTagName(
  "div"
)[0] as HTMLDivElement;
block109.innerText = `${sum109} грн`;
