const myButton102: HTMLButtonElement = document.getElementsByClassName(
  "button"
)[0] as HTMLButtonElement;
const myAge: HTMLInputElement = document.getElementById(
  "age"
) as HTMLInputElement;

myButton102.onclick = function () {
  const message: HTMLParagraphElement = document.createElement("p");

  const myAgeNumber: number = +myAge.value;

  const isMessage: HTMLParagraphElement = document.querySelectorAll("p")[0];
  if (isMessage) {
    isMessage.remove();
  }
  if (myAgeNumber <= 0 || myAgeNumber > 120) {
    message.innerText = "Enter a valid Age";
    message.style.color = " #caa443";
  } else if (myAgeNumber < 18) {
    message.innerText = `You're only ${myAgeNumber}, you are too young.`;
    message.style.color = "red";
  } else {
    message.innerText = `Your age is ${myAgeNumber}, you are adult.`;
    message.style.color = "green";
  }

  document.body.appendChild(message);
};
