let myFirstName: string | null = prompt("Enter Your Firstname");
if (myFirstName !== null) {
  console.log("myFirstName:", myFirstName);
}

let myLastName: string | null = prompt("Enter Your Lastname");
if (myLastName !== null) {
  console.log(" myLastName:", myLastName);
}

let age: string | null = prompt("Enter Your Age");
if (age !== null) {
  console.log(" age:", age);
}

if (myFirstName !== null && myLastName !== null && age !== null) {
  let myPerson: string = `I am ${myFirstName} ${myLastName}. I am ${age} years old.`;

  console.log(" myPerson :", myPerson);
}
