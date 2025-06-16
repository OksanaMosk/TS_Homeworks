function Cinderella(name, age, shoeSize) {
  this.name = name;
  this.age = age;
  this.shoeSize = shoeSize;
}

class Prince {
  constructor(name, age, shoesFound) {
    this.name = name;
    this.age = age;
    this.shoesFound = shoesFound;
  }
}
const princeHasband = new Prince("Petya", 30, 37);

const cinderellas = [
  new Cinderella("Grace", 33, 37),
  new Cinderella("Lily", 25, 38),
  new Cinderella("Chloe", 21, 36),
  new Cinderella("Zoe", 23, 39),
  new Cinderella("Eva", 24, 35),
  new Cinderella("Ruby", 20, 37),
  new Cinderella("Sophie", 26, 40),
  new Cinderella("Lucy", 27, 36),
  new Cinderella("Ava", 28, 37),
  new Cinderella("Maya", 30, 41),
];

let cinderellaWifeArray = [];

for (const item of cinderellas) {
  if (item.shoeSize === princeHasband.shoesFound) {
    cinderellaWifeArray.push(item);
  }
}
console.log("cinderellaWifeArray:", cinderellaWifeArray);

let youngestCinderellaWife = cinderellaWifeArray[0];
if (cinderellaWifeArray.length > 0) {
  for (let i = 0; i < cinderellaWifeArray.length; i++) {
    if (cinderellaWifeArray[i].age < youngestCinderellaWife.age) {
      youngestCinderellaWife = cinderellaWifeArray[i];
    }
  }
}
console.log("youngestCinderellaWife:", youngestCinderellaWife);
console.log(
  `${youngestCinderellaWife.name} and ${princeHasband.name} ---"Girko!!!"`
);

let cinderellaWifeFind = cinderellas.find(
  (item) => item.shoeSize === princeHasband.shoesFound
);
console.log("cinderellaWifeFind :", cinderellaWifeFind);
console.log(
  `${cinderellaWifeFind.name} and ${princeHasband.name} ---"Girko!!!"`
);
