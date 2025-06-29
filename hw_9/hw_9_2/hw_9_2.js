"use strict";
const array92 = ["Main", "Products", "About us", "Contacts"];
let menu = document.createElement("ul");
for (const item of array92) {
    let li = document.createElement("li");
    li.innerText = item;
    menu.appendChild(li);
}
document.body.appendChild(menu);
