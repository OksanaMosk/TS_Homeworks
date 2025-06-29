"use strict";
class Client75 {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients75 = [
    new Client75(1, "Andrii", "Shevchenko", "andrii@gmail.com", "+380931112233", [
        { title: "Laptop", price: 1500 },
        { title: "Mouse", price: 25 },
    ]),
    new Client75(2, "Oksana", "Petryk", "oksana.petryk@gmail.com", "+380671234567", [{ title: "Phone", price: 800 }]),
    new Client75(3, "Tetiana", "Hnatyuk", "t.hnatyuk@gmail.com", "+380631234567", [
        { title: "Book", price: 20 },
        { title: "Lamp", price: 40 },
        { title: "Notebook", price: 15 },
    ]),
    new Client75(4, "Maria", "Koval", "m.koval@gmail.com", "+380501112233", [
        { title: "TV", price: 600 },
    ]),
    new Client75(5, "Kristina", "Melnyk", "k.melnyk@gmail.com", "+380503334455", [
        { title: "Tablet", price: 300 },
        { title: "Charger", price: 30 },
    ]),
    new Client75(6, "Stepan", "Lysenko", "s.lysenko@gmail.com", "+380991122334", [
        { title: "Camera", price: 550 },
        { title: "Tripod", price: 70 },
    ]),
    new Client75(7, "Bohdan", "Ivanov", "bohdan.iv@gmail.com", "+380934445566", [
        { title: "Smartwatch", price: 200 },
    ]),
    new Client75(8, "Yulia", "Tkachenko", "y.tkachenko@gmail.com", "+380673334455", [
        { title: "Backpack", price: 50 },
        { title: "Shoes", price: 90 },
    ]),
    new Client75(9, "Dmytro", "Bondarenko", "d.bondar@gmail.com", "+380662223344", [
        { title: "Monitor", price: 300 },
        { title: "Keyboard", price: 70 },
        { title: "Mouse", price: 25 },
    ]),
    new Client75(10, "Olena", "Kravets", "olena.kravets@gmail.com", "+380981112233", [{ title: "Coffee Machine", price: 120 }]),
];
console.log(" clients :", clients75);
let sortClients = clients75.sort((client1, client2) => {
    return client1.order.length - client2.order.length;
});
