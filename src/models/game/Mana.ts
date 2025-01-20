import { getEnumKeyByValue } from '@common/Helpers';
import { Color } from '@game/Color';

export enum manaSymbols {
  COLORLESS = Color.COLORLESS,
  WHITE = Color.WHITE,
  BLUE = Color.BLUE,
  BLACK = Color.BLACK,
  RED = Color.RED,
  GREEN = Color.GREEN,
}

// Mana order representation goes CWUBRG in MTG cards.
export const manaOrder = [
  manaSymbols.COLORLESS,
  manaSymbols.WHITE,
  manaSymbols.BLUE,
  manaSymbols.BLACK,
  manaSymbols.RED,
  manaSymbols.GREEN,
];

export class ManaPool {
  private pool: Map<manaSymbols, number>;

  constructor() {
    this.pool = new Map<manaSymbols, number>();
  }

  add(symbol: manaSymbols, amount: number): ManaPool {
    if (amount < 0) {
      throw new Error('Cannot add a negative amount of mana');
    }
    const currentAmount = this.pool.get(symbol) || 0;
    this.pool.set(symbol, currentAmount + amount);

    return this;
  }

  remove(symbol: manaSymbols, amount: number): void {
    if (amount < 0) {
      throw new Error('Cannot subtract a negative amount of mana');
    }
    const currentAmount = this.pool.get(symbol) || 0;
    if (currentAmount < amount) {
      throw new Error(
        `Not enough ${getEnumKeyByValue(manaSymbols, symbol)} mana`
      );
    }
    this.pool.set(symbol, currentAmount - amount);
  }

  get(symbol: manaSymbols): number | undefined {
    return this.pool.get(symbol);
  }

  toString(): string {
    return manaOrder
      .map((symbol) => {
        const amount = this.pool.get(symbol);
        switch (amount) {
          case undefined:
            return undefined;
          default:
            return `${amount}${symbol}`;
        }
      })
      .filter((item) => item !== undefined)
      .join(', ');
  }
}
