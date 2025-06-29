"use strict";
const myForm = document.forms.namedItem("someForm");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const yourNameValue = myForm.elements.namedItem("name").value;
    const yourSurNameValue = myForm.elements.namedItem("surname").value;
    const yourAgeValue = +myForm.elements.namedItem("age").value;
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
