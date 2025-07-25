type WriterType49 = { id: number; name: string; age: number };

function writer49(users: WriterType49[]): void {
  document.write("<div>");

  for (const user of users) {
    document.write(
      `<div>
        <p>${user.id}</p>
        <h2>${user.name}</h2>
        <p>${user.age}</p>
        </div>`
    );
  }

  document.write("</div>");
}

writer49([
  { id: 1, name: "vasya", age: 31 },
  { id: 2, name: "petya", age: 30 },
  { id: 3, name: "kolya", age: 29 },
  { id: 4, name: "olya", age: 28 },
]);
