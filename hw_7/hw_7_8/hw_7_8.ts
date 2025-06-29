interface ICinderella {
  name: string;
  age: number;
  shoeSize: number;
}

interface IPrince {
  name: string;
  age: number;
  shoesFound: number;
}

class Cinderella implements ICinderella {
  constructor(
    public name: string,
    public age: number,
    public shoeSize: number
  ) {}
}

class Prince implements IPrince {
  constructor(
    public name: string,
    public age: number,
    public shoesFound: number
  ) {}
}

const princeHasband: IPrince = new Prince("Petya", 30, 37);

const cinderellas: ICinderella[] = [
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

let cinderellaWifeArray: ICinderella[] = [];

for (const item of cinderellas) {
  if (item.shoeSize === princeHasband.shoesFound) {
    cinderellaWifeArray.push(item);
  }
}
console.log("cinderellaWifeArray:", cinderellaWifeArray);

let youngestCinderellaWife: ICinderella = cinderellaWifeArray[0];
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

let cinderellaWifeFind: ICinderella | undefined = cinderellas.find(
  (item) => item.shoeSize === princeHasband.shoesFound
);
if (cinderellaWifeFind) {
  console.log("cinderellaWifeFind :", cinderellaWifeFind);
  console.log(
    `${cinderellaWifeFind.name} and ${princeHasband.name} ---"Girko!!!"`
  );
} else {
  console.log("No Cinderella found with matching shoe size.");
}
