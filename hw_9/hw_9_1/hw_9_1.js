const divBlock = document.createElement("div");

divBlock.classList.add("wrap");
divBlock.classList.add("collapse");
divBlock.classList.add("alpha");
divBlock.classList.add("beta");
divBlock.innerText = "Lorem";
const cloneDiv = divBlock.cloneNode(true);

document.body.append(divBlock, cloneDiv);
