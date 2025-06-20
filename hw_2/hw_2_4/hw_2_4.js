"use strict";
let users = [
    { name: "Ola", username: "ola@gmail.com", password: "123321" },
    { name: "Nata", username: "nata123", password: "111" },
    { name: "Musya", username: "musyaka", password: "654" },
    { name: "Petya", username: "petya@gmail.com", password: "369" },
    { name: "Vasya", username: "vasya@gmail.com", password: "555111" },
    { name: "Lida", username: "ladada", password: "1236544" },
    { name: "Taras", username: "tata", password: "12578" },
    { name: "Andrew", username: "and123321", password: "000023" },
    { name: "Michael", username: "mk@gmail.com", password: "1321" },
    { name: "Ira", username: "ira555", password: "555666" },
];
users.forEach((user, index) => {
    console.log(`User${index + 1}:`, user.password);
});
