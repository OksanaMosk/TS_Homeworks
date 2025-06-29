const array92: string[] = ["Main", "Products", "About us", "Contacts"];
let menu: HTMLUListElement = document.createElement("ul");
for (const item of array92) {
  let li: HTMLLIElement = document.createElement("li");
  li.innerText = item;
  menu.appendChild(li);
}
document.body.appendChild(menu);
