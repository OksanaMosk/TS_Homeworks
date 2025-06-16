let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

for (const item of coursesAndDurationArray) {
  let divBlock = document.createElement("div");
  divBlock.classList.add("wrap");
  document.body.appendChild(divBlock);
  let titleName = document.createElement("h2");
  titleName.innerText = `${item.title}`;

  let duration = document.createElement("p");
  duration.innerText = `Duration:${item.monthDuration} months`;
  divBlock.append(titleName, duration);
}
