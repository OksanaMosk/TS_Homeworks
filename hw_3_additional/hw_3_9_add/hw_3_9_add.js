let array = [
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
];
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "string") {
    console.log(array[i]);
  }
}
