let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
  const duration = coursesAndDurationArray[i];
  duration.monthDuration > 5
    ? console.log("Super")
    : console.log("It's Problem");
}
