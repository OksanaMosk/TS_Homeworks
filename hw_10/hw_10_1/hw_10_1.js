const myButton = document.getElementsByClassName("button")[0];
const myText = document.getElementById("text");
myButton.onclick = function () {
  //   myText.style.display = "none";
  myText.remove();
};
