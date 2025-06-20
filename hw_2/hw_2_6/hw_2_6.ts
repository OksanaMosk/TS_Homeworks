let strValue: string | null = prompt("Enter number");
if (strValue !== null) {
  let numValue: number = +strValue;

  if (isNaN(numValue)) {
    console.log("Please enter a valid number.");
  } else if (numValue !== 0) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
