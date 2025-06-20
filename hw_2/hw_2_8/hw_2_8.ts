let strDay: string | null = prompt("Enter day of the month");
if (strDay !== null) {
  let numDay: number = +strDay;

  if (isNaN(numDay)) {
    console.log("Please enter a valid number.");
  } else if (numDay >= 1 && numDay <= 10) {
    console.log("1");
  } else if (numDay >= 11 && numDay <= 20) {
    console.log("2");
  } else if (numDay >= 21 && numDay <= 31) {
    console.log("3");
  } else {
    console.log("Number out of range. Enter a day from 1 to 31.");
  }
}
