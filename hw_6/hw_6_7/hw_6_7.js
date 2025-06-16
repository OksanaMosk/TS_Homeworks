function sortNums(array, direction) {
  if (direction === "ascending") {
    return array.sort((a, b) => a - b);
  } else if (direction === "descending") {
    return array.sort((a, b) => b - a);
  }
}
console.log(sortNums([11, 21, 3], "ascending"));
console.log(sortNums([11, 21, 3], "descending"));
