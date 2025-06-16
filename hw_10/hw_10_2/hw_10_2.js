const myButton = document.getElementsByClassName("button")[0];
const myAge = document.getElementById("age");

myButton.onclick = function () {
  const message = document.createElement("p");

  const myAgeNumber = +myAge.value;

  const isMessage = document.querySelectorAll("p")[0];
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
