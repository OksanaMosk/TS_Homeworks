const whatIsSmallestNumber510 = (array: number[]): number => {
  let smallestNumber: number = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestNumber) {
      smallestNumber = array[i];
    }
  }
  console.log(smallestNumber);
  return smallestNumber;
};
whatIsSmallestNumber510([5, 9, 6, 0, -3, 2, 3]);
