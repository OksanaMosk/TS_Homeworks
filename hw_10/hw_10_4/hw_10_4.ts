let localString: string | null = localStorage.getItem("number");

let currentNumber: number = localString !== null ? +localString : 0;

currentNumber += 1;

localStorage.setItem("number", currentNumber.toString());

let block: HTMLDivElement = document.getElementsByTagName(
  "div"
)[0] as HTMLDivElement;
block.innerText = currentNumber.toString();
