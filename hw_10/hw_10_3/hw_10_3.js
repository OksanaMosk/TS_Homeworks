const myForm = document.forms.someForm;
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const yourNameValue = document.someForm.name.value;
  const yourSurNameValue = document.someForm.surname.value;
  const yourAgeValue = +document.someForm.age.value;

  const object = { yourNameValue, yourSurNameValue, yourAgeValue };
  // console.log(object);

  const isBlock = document.querySelectorAll("div")[0];
  if (isBlock) {
    isBlock.remove();
  }
  const block = document.createElement("div");
  block.classList.add("target");
  document.body.appendChild(block);

  block.innerText = `Name: ${object.yourNameValue}\n 
  Surname: ${object.yourSurNameValue}\n
    Age: ${object.yourAgeValue}`;
});
