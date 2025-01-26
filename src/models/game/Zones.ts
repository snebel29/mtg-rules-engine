import { List } from '@common/List';
import { Card } from '@models/game/Card';

// CR-400: General, zone is a place where objects can be during a game.
// There are normally seven zones: library, hand, battlefield, graveyard,
// stack, exile, and command. Some older cards also use the ante zone.
// Each player has their own library, hand, and graveyard. The other zones
// are shared by all players.
export class Zone {
  cards: List<Card> = new List();

  constructor(cards?: Card[]) {
    if (cards) {
      this.cards = new List(cards);
    }
  }

  add(card: Card): void {
    this.cards.add(card);
  }

  getCards(): Card[] {
    return this.cards.getItems();
  }

  countCards(): number {
    return this.cards.count();
  }

  suffle(): void {
    this.cards.shuffle();
  }
}

export class Library extends Zone {
  constructor(cards?: Card[]) {
    super(cards);
  }
}

export class Hand extends Zone {
  constructor(cards?: Card[]) {
    super(cards);
  }
}

export class Graveyard extends Zone {
  constructor(cards?: Card[]) {
    super(cards);
  }
}

// Shared zones follows

export class Exile extends Zone {
  constructor(cards?: Card[]) {
    super(cards);
  }
}

export class Battlefield extends Zone {
  constructor(cards?: Card[]) {
    super(cards);
  }
}
