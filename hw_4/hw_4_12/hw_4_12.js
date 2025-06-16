function swap(arr, index1, index2) {
  if (index1 <= arr.length && index2 <= arr.length) {
    let num = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num;

    console.log("arr:", arr);
    return arr;
  }
  console.log("SOS");
}
swap([11, 22, 44, 55, 77, 88], 0, 5);
