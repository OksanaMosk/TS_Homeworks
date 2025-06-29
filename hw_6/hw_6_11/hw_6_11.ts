type CardType611 = { cardSuit: string; value: string; color: string };

let values611 = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
let suits611 = ["spade", "diamond", "heart", "club"];

let cards611: CardType611[] = [];

for (const value of values611) {
  for (const suit of suits611) {
    let cardColor: string = "";
    if (suit === "spade" || suit === "club") {
      cardColor = "black";
    } else if (suit === "diamond" || suit === "heart") {
      cardColor = "red";
    }
    const card: CardType611 = {
      cardSuit: suit,
      value: value,
      color: cardColor,
    };
    cards611.push(card);
  }
}
console.log(" cards:", cards611);

type AccumulatorType = {
  spades: CardType611[];
  diamonds: CardType611[];
  hearts: CardType611[];
  clubs: CardType611[];
};

let cardsReduce: AccumulatorType = cards611.reduce(
  (accumulator: AccumulatorType, card: CardType611) => {
    if (card.cardSuit === "spade") {
      accumulator.spades.push(card);
    } else if (card.cardSuit === "diamond") {
      accumulator.diamonds.push(card);
    } else if (card.cardSuit === "heart") {
      accumulator.hearts.push(card);
    } else if (card.cardSuit === "club") {
      accumulator.clubs.push(card);
    }
    return accumulator;
  },
  {
    spades: [],

    diamonds: [],

    hearts: [],

    clubs: [],
  }
);
console.log(" cardsReduce:", cardsReduce);
