let arrayAdd38: (string | number | boolean | null | undefined)[] = [
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
for (let i = 0; i < arrayAdd38.length; i++) {
  if (typeof arrayAdd38[i] === "number" && !isNaN(arrayAdd38[i] as number)) {
    console.log(arrayAdd38[i]);
  }
}
