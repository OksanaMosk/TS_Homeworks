function whatIsSmallestNumber(array) {
  let smallestNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestNumber) {
      smallestNumber = array[i];
    }
  }
  console.log(smallestNumber);
  return smallestNumber;
}
whatIsSmallestNumber([5, 9, 6, 0, -3, 2, 3]);
