import { ManaPool, manaSymbols } from '@game/Mana';
import { Color } from '@game/Color';

export enum CardColor {
  COLORLESS = Color.COLORLESS,
  WHITE = Color.WHITE,
  BLUE = Color.BLUE,
  BLACK = Color.BLACK,
  RED = Color.RED,
  GREEN = Color.GREEN,
}

// Card represents a card of Magic the Gathering.
export class Card {
  // CR-201: Card Name, each English card name is unique, effectively it is the card's id.
  readonly name: string;

  // CR-201: Mana Cost and Color.
  readonly manaCost: ManaPool;

  // CR-205: Every card has one or more types, and some cards have zero or more subtypes and supertypes.
  // CR-205.2: Card Types
  readonly types: CardType[];
  // CR-205.3 Card Subtypes.
  readonly subtypes: CardSubType[] = [];
  // CR-205.3 Card Supertypes.
  readonly supertypes: CardSuperType[] = [];

  // Color is defined by the mana cost colors of the card.
  private color: CardColor[] = [];

  constructor(
    name: string,
    manaCost: ManaPool,
    types: CardType[],
    subtypes?: CardSubType[],
    supertypes?: CardSuperType[]
  ) {
    this.name = name;
    this.manaCost = manaCost;
    this.types = types;

    if (typeof subtypes !== 'undefined') {
      this.subtypes = subtypes;
    }
    if (typeof supertypes !== 'undefined') {
      this.supertypes = supertypes;
    }

    // Initialize the color array based on the manaCost pool.
    for (let manaColor of Object.values(manaSymbols)) {
      let colorCount = this.manaCost.get(manaColor) || 0;
      if (colorCount > 0) {
        this.color.push(manaColor as unknown as CardColor);
      }
    }
  }

  hasColor(color: CardColor): boolean {
    return this.color.includes(color);
  }

  clone(): Card {
    return new Card(
      this.name,
      this.manaCost,
      this.types,
      this.subtypes,
      this.supertypes
    );
  }
}

// CR-205.2: Card Types.
export enum CardType {
  // Permanent types.
  ARTIFACT = 'Artifact',
  CREATURE = 'Creature',
  ENCHANTMENT = 'Enchantment',
  LAND = 'Land',

  // Non-permanent.
  INSTANT = 'Instant',
  SORCERY = 'Sorcery',
}

// CR-205.3: Subtypes
export enum CardSubType {
  FOREST = 'Forest',
}

// CR-205.4: Supertypes
export enum CardSuperType {
  LEGENDARY = 'Legendary',
}

// CR-205.2c: A token is not a card but a game object that represents a card, for example a copy of a card in the
// battlefield, or a token created by a spell.
export class Token extends Card {}
