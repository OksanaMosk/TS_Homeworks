const myForm: HTMLFormElement = document.forms.namedItem(
  "someForm"
) as HTMLFormElement;

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const yourNameValue: string = (
    myForm.elements.namedItem("name") as HTMLInputElement
  ).value;
  const yourSurNameValue: string = (
    myForm.elements.namedItem("surname") as HTMLInputElement
  ).value;
  const yourAgeValue: number = +(
    myForm.elements.namedItem("age") as HTMLInputElement
  ).value;

  const object = { yourNameValue, yourSurNameValue, yourAgeValue };
  // console.log(object);

  const isBlock: HTMLDivElement = document.querySelectorAll("div")[0];
  if (isBlock) {
    isBlock.remove();
  }
  const block: HTMLDivElement = document.createElement("div");
  block.classList.add("target");
  document.body.appendChild(block);

  block.innerText = `Name: ${object.yourNameValue}\n 
  Surname: ${object.yourSurNameValue}\n
    Age: ${object.yourAgeValue}`;
});
