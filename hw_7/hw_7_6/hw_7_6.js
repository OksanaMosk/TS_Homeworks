"use strict";
class Car {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }
    info() {
        let result = "";
        for (const key in this) {
            if (typeof this[key] !== "function" && this[key] !== undefined)
                result += `${key}: ${this[key]}\n`;
        }
        return result;
    }
    increaseMaxSpeed(speedToAdd) {
        if (speedToAdd > 0) {
            this.maxSpeed += speedToAdd;
        }
        return this.maxSpeed;
    }
    changeYear(newValue) {
        if (newValue > this.year) {
            this.year = Math.max(this.year, newValue);
        }
        return this.year;
    }
    addDriver(driver) {
        if (!driver)
            throw new Error("Driver is required");
        return (this.driver = driver);
    }
}
const car = [
    new Car("Camry", "Toyota", 2010, 210, 2.5),
    new Car("Mustang", "Ford", 2015, 250, 5.0),
    new Car("Civic", "Honda", 2018, 180, 1.8),
];
console.log(car[0].producer);
console.log(car[0].year);
console.log(car[0].model);
console.log(car[0].maxSpeed);
console.log(car[0].engineVolume);
console.log(car[0].info());
console.log(car[0].drive());
console.log(car[0].increaseMaxSpeed(25));
console.log(car[0].changeYear(2025));
console.log(car[0].addDriver({ name: "Petya", age: 30 }));
console.log(car[0]);
