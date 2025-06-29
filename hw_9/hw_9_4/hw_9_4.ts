type CoursesAndDuration94 = { title: string; monthDuration: number };

let coursesAndDurationArray94: CoursesAndDuration94[] = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
for (const item of coursesAndDurationArray94) {
  let divBlock: HTMLDivElement = document.createElement("div");
  document.body.appendChild(divBlock);
  divBlock.classList.add("item");

  let titleName: HTMLHeadingElement = document.createElement("h1");
  titleName.innerText = `${item.title}`;
  titleName.classList.add("heading");

  let duration: HTMLParagraphElement = document.createElement("p");
  duration.innerText = `Duration:${item.monthDuration} months`;
  duration.classList.add("description");
  divBlock.append(titleName, duration);
}
