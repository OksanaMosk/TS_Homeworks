"use strict";
let values611 = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
let suits611 = ["spade", "diamond", "heart", "club"];
let cards611 = [];
for (const value of values611) {
    for (const suit of suits611) {
        let cardColor = "";
        if (suit === "spade" || suit === "club") {
            cardColor = "black";
        }
        else if (suit === "diamond" || suit === "heart") {
            cardColor = "red";
        }
        const card = {
            cardSuit: suit,
            value: value,
            color: cardColor,
        };
        cards611.push(card);
    }
}
console.log(" cards:", cards611);
let cardsReduce = cards611.reduce((accumulator, card) => {
    if (card.cardSuit === "spade") {
        accumulator.spades.push(card);
    }
    else if (card.cardSuit === "diamond") {
        accumulator.diamonds.push(card);
    }
    else if (card.cardSuit === "heart") {
        accumulator.hearts.push(card);
    }
    else if (card.cardSuit === "club") {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
});
console.log(" cardsReduce:", cardsReduce);
