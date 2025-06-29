"use strict";
let coursesAndDurationArray81 = [
    { title: "JavaScript Complex", monthDuration: 5 },
    { title: "Java Complex", monthDuration: 6 },
    { title: "Python Complex", monthDuration: 6 },
    { title: "QA Complex", monthDuration: 4 },
    { title: "FullStack", monthDuration: 7 },
    { title: "Frontend", monthDuration: 4 },
];
let newCoursesAndDurationArray81 = coursesAndDurationArray81.map((item, index) => (Object.assign(Object.assign({}, item), { id: index + 1 })));
console.log("newCoursesAndDurationArray:", newCoursesAndDurationArray81);
