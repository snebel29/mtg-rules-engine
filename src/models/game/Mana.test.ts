import { ManaPool, manaSymbols } from './Mana';

describe('ManaPool', () => {
  let manaPool: ManaPool;

  beforeEach(() => {
    manaPool = new ManaPool();
  });

  test('Should initialize by default with all mana symbols set to undefined', () => {
    for (let symbol of Object.values(manaSymbols)) {
      expect(manaPool.get(symbol)).toBe(undefined);
    }
  });

  test('Should aggregate mana correctly', () => {
    manaPool.add(manaSymbols.COLORLESS, 0);
    manaPool.add(manaSymbols.COLORLESS, 0);
    manaPool.add(manaSymbols.WHITE, 1);
    manaPool.add(manaSymbols.WHITE, 1);
    manaPool.add(manaSymbols.BLUE, 2);
    manaPool.add(manaSymbols.BLUE, 2);
    manaPool.add(manaSymbols.BLACK, 3);
    manaPool.add(manaSymbols.BLACK, 3);
    manaPool.add(manaSymbols.RED, 4);
    manaPool.add(manaSymbols.RED, 4);
    manaPool.add(manaSymbols.GREEN, 5);
    manaPool.add(manaSymbols.GREEN, 5);
    expect(manaPool.get(manaSymbols.COLORLESS)).toBe(0);
    expect(manaPool.get(manaSymbols.WHITE)).toBe(2);
    expect(manaPool.get(manaSymbols.BLUE)).toBe(4);
    expect(manaPool.get(manaSymbols.BLACK)).toBe(6);
    expect(manaPool.get(manaSymbols.RED)).toBe(8);
    expect(manaPool.get(manaSymbols.GREEN)).toBe(10);
  });

  test('Should add zero mana values correctly', () => {
    manaPool.add(manaSymbols.COLORLESS, 0);
    expect(manaPool.get(manaSymbols.COLORLESS)).toBe(0);
  });

  test('Should throw an error when adding a negative amount of mana', () => {
    expect(() => manaPool.add(manaSymbols.RED, -1)).toThrow(
      'Cannot add a negative amount of mana'
    );
  });

  test('Should remove mana correctly', () => {
    manaPool.add(manaSymbols.RED, 5);
    manaPool.remove(manaSymbols.RED, 3);
    expect(manaPool.get(manaSymbols.RED)).toBe(2);
  });

  test('Should throw an error when removing a negative amount of mana', () => {
    expect(() => manaPool.remove(manaSymbols.RED, -1)).toThrow(
      'Cannot subtract a negative amount of mana'
    );
  });

  test('Should throw an error when removing more mana than available', () => {
    manaPool.add(manaSymbols.RED, 5);
    expect(() => manaPool.remove(manaSymbols.RED, 10)).toThrow(
      'Not enough RED mana'
    );
  });

  test('Should return correct string representation when added in a different order', () => {
    manaPool.add(manaSymbols.WHITE, 1);
    manaPool.add(manaSymbols.BLACK, 2);
    manaPool.add(manaSymbols.BLUE, 5);
    manaPool.add(manaSymbols.COLORLESS, 6);
    expect(manaPool.toString()).toBe('6C, 1W, 5U, 2B');
  });

  test('Should return all colors', () => {
    manaPool.add(manaSymbols.WHITE, 1);
    manaPool.add(manaSymbols.BLACK, 2);
    manaPool.add(manaSymbols.GREEN, 3);
    manaPool.add(manaSymbols.RED, 4);
    manaPool.add(manaSymbols.BLUE, 5);
    manaPool.add(manaSymbols.COLORLESS, 0);
    expect(manaPool.toString()).toBe('0C, 1W, 5U, 2B, 4R, 3G');
  });
});
