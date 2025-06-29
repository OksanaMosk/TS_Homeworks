interface ICoursesAndDuration {
  title: string;
  monthDuration: number;
}
interface INewCoursesAndDuration81 {
  id: number;
  title: string;
  monthDuration: number;
}
let coursesAndDurationArray81: ICoursesAndDuration[] = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
let newCoursesAndDurationArray81: INewCoursesAndDuration81[] =
  coursesAndDurationArray81.map((item, index) => ({
    ...item,
    id: index + 1,
  }));
console.log("newCoursesAndDurationArray:", newCoursesAndDurationArray81);
