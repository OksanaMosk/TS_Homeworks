const writer = (text, num) => {
  document.write("<ul>");
  let array = [];
  for (let i = 0; i < num; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write("</ul>");
};

writer("Lorem ipsum dolor sit amet, consectetur", 3);
