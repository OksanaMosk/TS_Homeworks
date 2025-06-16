let values = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
let suits = ["spade", "diamond", "heart", "club"];

let cards = [];

for (const value of values) {
  for (const suit of suits) {
    let cardColor = "";
    if (suit === "spade" || suit === "club") {
      cardColor = "black";
    } else if (suit === "diamond" || suit === "heart") {
      cardColor = "red";
    }
    const card = { cardSuit: suit, value: value, color: cardColor };
    cards.push(card);
  }
}
console.log(" cards:", cards);

console.log(
  cards.filter((item) => {
    return item.value === "ace" && item.cardSuit === "spade";
  })
);

console.log(
  cards.filter((item) => {
    return item.value.includes("6");
  })
);

console.log(
  cards.filter((item) => {
    return item.color === "red";
  })
);

console.log(
  cards.filter((item) => {
    return item.cardSuit === "diamond";
  })
);

console.log(
  cards.filter((item) => {
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
