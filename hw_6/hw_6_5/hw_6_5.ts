function stringToarray(str: string): string[] {
  if (str) {
    let s: string[] = str.split(" ");
    return s;
  }
  return [""];
}

console.log(stringToarray("Ревуть воли як ясла повні"));
