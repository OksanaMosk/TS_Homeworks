"use strict";
class User73 {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let users73 = [
    new User73(133, "Andrii", "Shevchenko", "andrii.shev@gmail.com", "+380931112233"),
    new User73(222, "Oksana", "Petryk", "oksana.petryk@gmail.com", "+380671234567"),
    new User73(31, "Tetiana", "Hnatyuk", "t.hnatyuk@gmail.com", "+380631234567"),
    new User73(45, "Maria", "Koval", "m.koval@gmail.com", "+380501112233"),
    new User73(56, "Kristina", "Melnyk", "k.melnyk@gmail.com", "+380503334455"),
    new User73(67, "Stepan", "Lysenko", "s.lysenko@gmail.com", "+380991122334"),
    new User73(79, "Bohdan", "Ivanov", "bohdan.iv@gmail.com", "+380934445566"),
    new User73(48, "Yulia", "Tkachenko", "y.tkachenko@gmail.com", "+380673334455"),
    new User73(99, "Dmytro", "Bondarenko", "d.bondar@gmail.com", "+380662223344"),
    new User73(105, "Olena", "Kravets", "olena.kravets@gmail.com", "+380981112233"),
];
console.log(" users :", users73);
let sortUsers = users73.sort((user1, user2) => {
    return user1.id - user2.id;
});
console.log("sortUsers:", sortUsers);
