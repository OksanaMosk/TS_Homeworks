function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}
let users = [
  new User(1, "Andrii", "Shevchenko", "andrii.shev@gmail.com", "+380931112233"),
  new User(2, "Oksana", "Petryk", "oksana.petryk@gmail.com", "+380671234567"),
  new User(3, "Tetiana", "Hnatyuk", "t.hnatyuk@gmail.com", "+380631234567"),
  new User(4, "Maria", "Koval", "m.koval@gmail.com", "+380501112233"),
  new User(5, "Kristina", "Melnyk", "k.melnyk@gmail.com", "+380503334455"),
  new User(6, "Stepan", "Lysenko", "s.lysenko@gmail.com", "+380991122334"),
  new User(7, "Bohdan", "Ivanov", "bohdan.iv@gmail.com", "+380934445566"),
  new User(8, "Yulia", "Tkachenko", "y.tkachenko@gmail.com", "+380673334455"),
  new User(9, "Dmytro", "Bondarenko", "d.bondar@gmail.com", "+380662223344"),
  new User(10, "Olena", "Kravets", "olena.kravets@gmail.com", "+380981112233"),
];
console.log(" users :", users);

let filterUsers = users.filter((user) => {
  return user.id % 2 === 0;
});
console.log("filterUsers:", filterUsers);
