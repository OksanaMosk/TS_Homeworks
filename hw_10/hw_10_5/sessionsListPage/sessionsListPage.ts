let sessionsListPage: string[] = JSON.parse(
  localStorage.getItem("sessionsList") || "[]"
);
console.log(" sessionsList:", sessionsListPage);

const heading: HTMLHeadingElement = document.createElement("h1");
heading.innerText = "History of visits to the main page:";

const list: HTMLUListElement = document.createElement("ul");
for (let i = 0; i < sessionsListPage.length; i++) {
  let itemOfList: HTMLLIElement = document.createElement("li");

  const date = new Date(sessionsListPage[i]);
  itemOfList.innerText = date.toLocaleString();
  list.appendChild(itemOfList);
}
const goback: HTMLAnchorElement = document.createElement("a");
goback.innerText = "Go back to the Main Page";
goback.href = "../hw_10_5/hw_10_5.html";
document.body.append(goback, heading, list);
