interface IReview {
  user: string;
  rating: number;
}
interface ICoursesAndDuration82 {
  title: string;
  monthDuration: number;
  reviews: IReview[];
}

interface INewCoursesAndDuration82 {
  title: string;
  monthDuration: number;
  reviews: IReview[];
  result: string;
}

let coursesAndDurationArray82: ICoursesAndDuration82[] = [
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
function foo(course: ICoursesAndDuration82): string {
  if (course.monthDuration < 5) return "Easy";
  if (course.monthDuration < 8) return "Medium";
  return "Hard";
}
const newCoursesAndDurationArray82: INewCoursesAndDuration82[] =
  coursesAndDurationArray82.map((course) => ({
    ...course,
    result: foo(course),
  }));
console.log(" newCoursesAndDurationArray :", newCoursesAndDurationArray82);

// const copy_1CoursesAndDurationArray = JSON.stringify(coursesAndDurationArray);
// const copyCoursesAndDurationArray = JSON.parse(copy_1CoursesAndDurationArray);

// const copyCoursesAndDurationArray = Object.assign(newCoursesAndDurationArray);
function deepClone<T>(object: T): T {
  if (
    object === null ||
    object === undefined ||
    (typeof object === "number" && Number.isNaN(object))
  ) {
    return object;
  }

  if (Array.isArray(object)) {
    return object.map((item) => deepClone(item)) as unknown as T;
  }

  if (typeof object === "object") {
    const newObject: any = {};
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        newObject[key] = deepClone((object as any)[key]);
      }
    }
    return newObject;
  }

  return object;
}

const copyCoursesAndDurationArray = deepClone(newCoursesAndDurationArray82);
copyCoursesAndDurationArray[0].reviews[0].user = "NEW Charlie";
console.log(" copyCoursesAndDurationArray :", copyCoursesAndDurationArray);
