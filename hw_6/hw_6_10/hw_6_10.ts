type CardType = { cardSuit: string; value: string; color: string };

let values: string[] = [
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
  "ace",
];
let suits: string[] = ["spade", "diamond", "heart", "club"];

let cards: CardType[] = [];

for (const value of values) {
  for (const suit of suits) {
    let cardColor: string = "";
    if (suit === "spade" || suit === "club") {
      cardColor = "black";
    } else if (suit === "diamond" || suit === "heart") {
      cardColor = "red";
    }
    const card: CardType = { cardSuit: suit, value: value, color: cardColor };
    cards.push(card);
  }
}
console.log(" cards:", cards);

console.log(
  cards.filter((item): boolean => {
    return item.value === "ace" && item.cardSuit === "spade";
  })
);

console.log(
  cards.filter((item): boolean => {
    return item.value.includes("6");
  })
);

console.log(
  cards.filter((item): boolean => {
    return item.color === "red";
  })
);

console.log(
  cards.filter((item): boolean => {
    return item.cardSuit === "diamond";
  })
);

console.log(
  cards.filter((item): boolean => {
    return (
      item.cardSuit === "club" &&
      (item.value === "9" ||
        item.value === "10" ||
        item.value === "jack" ||
        item.value === "queen" ||
        item.value === "king" ||
        item.value === "ace")
    );
  })
);
