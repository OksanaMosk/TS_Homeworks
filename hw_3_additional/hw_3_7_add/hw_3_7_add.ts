let arrayAdd37: (string | number | boolean | null | undefined)[] = [
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
for (let i = 0; i < arrayAdd37.length; i++) {
  if (typeof arrayAdd37[i] === "boolean") {
    console.log(arrayAdd37[i]);
  }
}
