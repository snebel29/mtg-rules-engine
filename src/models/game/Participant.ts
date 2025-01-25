import { Card } from '@models/game/Card';
import { List } from '@common/List';

export class Deck {
  name: string;
  cards: List<Card>;
  constructor(name: string, cards: Card[]) {
    this.name = name;
    this.cards = new List(cards);
  }

  suffle(): void {
    this.cards.shuffle();
  }
}

export class Sideboard {
  cards: List<Card>;
  constructor(cards: Card[]) {
    this.cards = new List(cards);
  }
}

export class Participant {
  name: string;
  deck: Deck;
  sideboard?: Sideboard;

  constructor(name: string, deck: Deck, sideboard?: Sideboard) {
    this.name = name;
    this.deck = deck;
    if (sideboard) {
      this.sideboard = sideboard;
    }
  }
}
