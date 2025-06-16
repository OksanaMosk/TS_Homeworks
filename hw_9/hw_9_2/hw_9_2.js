const array = ["Main", "Products", "About us", "Contacts"];
let menu = document.createElement("ul");
for (const item of array) {
  let li = document.createElement("li");
  li.innerText = item;
  menu.appendChild(li);
}
document.body.appendChild(menu);
