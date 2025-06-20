let strTime: string | null = prompt("Enter minutes up 0 to 59");
if (strTime !== null) {
  let numTime: number = +strTime;

  if (isNaN(numTime)) {
    console.log("Please enter a valid number.");
  } else if (numTime >= 0 && numTime < 15) {
    console.log("1");
  } else if (numTime >= 15 && numTime < 30) {
    console.log("2");
  } else if (numTime >= 30 && numTime < 45) {
    console.log("3");
  } else if (numTime >= 45 && numTime <= 59) {
    console.log("4");
  } else {
    console.log("Number out of range. Enter from 0 to 59.");
  }
}
