class CardDeck {
  constructor() {
    this.suitShapes = ["Clubs", "Diamonds", "Hearts", "Spaces"];
  }

  *suits() {
    for (const color of this.suitShapes) {
      yield color;
    }
  }
}

const deck = new CardDeck();
for (const suit of deck.suits()) {
  console.log(suit);
}
