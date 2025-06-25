function swap(
  arr: number[],
  index1: number,
  index2: number
): number[] | undefined {
  if (
    index1 >= 0 &&
    index1 <= arr.length - 1 &&
    index2 >= 0 &&
    index2 <= arr.length - 1
  ) {
    const num: number = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num;

    console.log("arr:", arr);
    return arr;
  }
  console.log("SOS");
  return undefined;
}
swap([11, 22, 44, 55, 77, 88], 0, 5);
