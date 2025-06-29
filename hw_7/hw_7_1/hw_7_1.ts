interface IUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
}

class User71 implements IUser {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public email: string,
    public phone: string
  ) {}
}

let users71: IUser[] = [
  new User71(
    1,
    "Andrii",
    "Shevchenko",
    "andrii.shev@gmail.com",
    "+380931112233"
  ),
  new User71(2, "Oksana", "Petryk", "oksana.petryk@gmail.com", "+380671234567"),
  new User71(3, "Tetiana", "Hnatyuk", "t.hnatyuk@gmail.com", "+380631234567"),
  new User71(4, "Maria", "Koval", "m.koval@gmail.com", "+380501112233"),
  new User71(5, "Kristina", "Melnyk", "k.melnyk@gmail.com", "+380503334455"),
  new User71(6, "Stepan", "Lysenko", "s.lysenko@gmail.com", "+380991122334"),
  new User71(7, "Bohdan", "Ivanov", "bohdan.iv@gmail.com", "+380934445566"),
  new User71(8, "Yulia", "Tkachenko", "y.tkachenko@gmail.com", "+380673334455"),
  new User71(9, "Dmytro", "Bondarenko", "d.bondar@gmail.com", "+380662223344"),
  new User71(
    10,
    "Olena",
    "Kravets",
    "olena.kravets@gmail.com",
    "+380981112233"
  ),
];
console.log(" users :", users71);
