const divBlock: HTMLDivElement = document.createElement("div");

divBlock.classList.add("wrap");
divBlock.classList.add("collapse");
divBlock.classList.add("alpha");
divBlock.classList.add("beta");
divBlock.innerText = "Lorem";
const cloneDiv: HTMLDivElement = divBlock.cloneNode(true) as HTMLDivElement;

document.body.append(divBlock, cloneDiv);
