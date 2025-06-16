Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

let users = [
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

let usersWithTrue = [];
users.myForEach(function (user) {
  if (user.status === true) {
    usersWithTrue.push(user);
  }
});

console.log("usersWithTrue:", usersWithTrue);

Array.prototype.myFilter = function (predicate) {
  const array = [];
  for (const item of this) {
    if (predicate(item)) {
      array.push(item);
    }
  }
  return array;
};

let adults = users.myFilter(function (user) {
  return user.age >= 21;
});
console.log("adults :", adults);
