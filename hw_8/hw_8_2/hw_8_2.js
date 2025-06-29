"use strict";
let coursesAndDurationArray82 = [
    {
        title: "JavaScript Complex",
        monthDuration: 5,
        reviews: [
            { user: "Charlie", rating: 5 },
            { user: "Dave", rating: 3 },
        ],
    },
    {
        title: "Java Complex",
        monthDuration: 6,
        reviews: [
            { user: "Charlie", rating: 5 },
            { user: "Dave", rating: 3 },
        ],
    },
    {
        title: "Python Complex",
        monthDuration: 8,
        reviews: [
            { user: "Charlie", rating: 5 },
            { user: "Dave", rating: 3 },
        ],
    },
    {
        title: "QA Complex",
        monthDuration: 4,
        reviews: [
            { user: "Charlie", rating: 5 },
            { user: "Dave", rating: 3 },
        ],
    },
    {
        title: "FullStack",
        monthDuration: 7,
        reviews: [
            { user: "Charlie", rating: 5 },
            { user: "Dave", rating: 3 },
        ],
    },
    {
        title: "Frontend",
        monthDuration: 9,
        reviews: [
            { user: "Charlie", rating: 5 },
            { user: "Dave", rating: 3 },
        ],
    },
];
function foo(course) {
    if (course.monthDuration < 5)
        return "Easy";
    if (course.monthDuration < 8)
        return "Medium";
    return "Hard";
}
const newCoursesAndDurationArray82 = coursesAndDurationArray82.map((course) => (Object.assign(Object.assign({}, course), { result: foo(course) })));
console.log(" newCoursesAndDurationArray :", newCoursesAndDurationArray82);
// const copy_1CoursesAndDurationArray = JSON.stringify(coursesAndDurationArray);
// const copyCoursesAndDurationArray = JSON.parse(copy_1CoursesAndDurationArray);
// const copyCoursesAndDurationArray = Object.assign(newCoursesAndDurationArray);
function deepClone(object) {
    if (object === null ||
        object === undefined ||
        (typeof object === "number" && Number.isNaN(object))) {
        return object;
    }
    if (Array.isArray(object)) {
        return object.map((item) => deepClone(item));
    }
    if (typeof object === "object") {
        const newObject = {};
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                newObject[key] = deepClone(object[key]);
            }
        }
        return newObject;
    }
    return object;
}
const copyCoursesAndDurationArray = deepClone(newCoursesAndDurationArray82);
copyCoursesAndDurationArray[0].reviews[0].user = "NEW Charlie";
console.log(" copyCoursesAndDurationArray :", copyCoursesAndDurationArray);
