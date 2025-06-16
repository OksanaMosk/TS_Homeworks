function stringToarray(str) {
  if (str) {
    let s = str.split(" ");
    return s;
  }
  return [""];
}

console.log(stringToarray("Ревуть воли як ясла повні"));
