interface IAddDriver77 {
  name: string;
  age: number;
}

interface ICar77 {
  model: string;
  producer: string;
  year: number;
  maxSpeed: number;
  engineVolume: number;
  driver?: IAddDriver77;

  drive(): string;
  info(): string;
  increaseMaxSpeed(speedToAdd: number): number;
  changeYear(newValue: number): number;
  addDriver(driver: IAddDriver77): IAddDriver77;
}

class Car77 implements ICar77 {
  public driver?: IAddDriver77;
  constructor(
    public model: string,
    public producer: string,
    public year: number,
    public maxSpeed: number,
    public engineVolume: number
  ) {}

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

  increaseMaxSpeed(speedToAdd: number): number {
    if (speedToAdd > 0) {
      this.maxSpeed += speedToAdd;
    }
    return this.maxSpeed;
  }

  changeYear(newValue: number): number {
    if (newValue > this.year) {
      this.year = newValue;
    }
    return this.year;
  }

  addDriver(driver: IAddDriver77): IAddDriver77 {
    if (!driver) throw new Error("Driver is required");

    return (this.driver = driver);
  }
}

const car77: ICar77[] = [
  new Car77("Camry", "Toyota", 2010, 210, 2.5),
  new Car77("Mustang", "Ford", 2015, 250, 5.0),
  new Car77("Civic", "Honda", 2018, 180, 1.8),
];

console.log(car77[0].producer);
console.log(car77[0].year);
console.log(car77[0].model);
console.log(car77[0].maxSpeed);
console.log(car77[0].engineVolume);
console.log(car77[0].info());
console.log(car77[0].drive());
console.log(car77[0].increaseMaxSpeed(25));
console.log(car77[0].changeYear(2025));
console.log(car77[0].addDriver({ name: "Petya", age: 30 }));

console.log(car77[0]);
