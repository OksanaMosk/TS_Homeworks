const sum = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  console.log(result);
  return result;
};
sum([6, 30, 150, 110, 4]);
