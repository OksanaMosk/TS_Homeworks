const myButton: HTMLButtonElement = document.getElementsByClassName(
  "button"
)[0] as HTMLButtonElement;

const myText: HTMLParagraphElement = document.getElementById(
  "text"
) as HTMLParagraphElement;
myButton.onclick = function () {
  //   myText.style.display = "none";
  myText.remove();
};
