interface IUser79 {
  name: string;
  age: number;
  status: boolean;
}

interface Array<T> {
  myForEach(callback: (value: T, index: number, array: T[]) => void): void;
  myFilter(predicate: (item: T) => boolean): T[];
}

Array.prototype.myForEach = function <T>(
  this: T[],
  callback: (value: T, index: number, array: T[]) => void
): void {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

let users79: IUser79[] = [
  { name: "eva", age: 22, status: true },
  { name: "daniel", age: 18, status: false },
  { name: "sophia", age: 28, status: true },
  { name: "michael", age: 33, status: true },
  { name: "laura", age: 15, status: false },
  { name: "lucas", age: 21, status: true },
  { name: "chloe", age: 24, status: false },
  { name: "josh", age: 35, status: true },
  { name: "olivia", age: 20, status: false },
  { name: "charlie", age: 29, status: true },
  { name: "grace", age: 21, status: false },
  { name: "nathan", age: 34, status: true },
];

let usersWithTrue: IUser79[] = [];
users79.myForEach(function (user79) {
  if (user79.status === true) {
    usersWithTrue.push(user79);
  }
});

console.log("usersWithTrue:", usersWithTrue);

Array.prototype.myFilter = function <T>(
  this: T[],
  predicate: (item: T) => boolean
): T[] {
  const array: T[] = [];
  for (const item of this) {
    if (predicate(item)) {
      array.push(item);
    }
  }
  return array;
};

let adults = users79.myFilter(function (user79) {
  return user79.age >= 21;
});
console.log("adults :", adults);
