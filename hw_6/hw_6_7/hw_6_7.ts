function sortNums(array: number[], direction: string): number[] {
  if (direction === "ascending") {
    return array.sort((a, b) => a - b);
  }
  if (direction === "descending") {
    return array.sort((a, b) => b - a);
  } else {
    return array;
  }
}
console.log(sortNums([11, 21, 3], "ascending"));
console.log(sortNums([11, 21, 3], "descending"));
