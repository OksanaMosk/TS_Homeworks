type WriterType58 = string | number | boolean | null | undefined;
const writer58 = (array: WriterType58[]): void => {
  document.write("<ul>");

  for (let i = 0; i < array.length; i++) {
    document.write(`<li>${array[i]}</li>`);
  }
  document.write("</ul>");
};

writer58([
  1000,
  "juice",
  null,
  false,
  "tea",
  NaN,
  undefined,
  true,
  "strawberry",
  123567,
]);
