import { Card, CardColor, CardSubType, CardSuperType, CardType } from './Card';
import { ManaPool, manaSymbols } from '@game/Mana';

describe('Card', () => {
  test('Should create a card with mandatory parameters and the correct properties', () => {
    let manaCost = new ManaPool().add(manaSymbols.COLORLESS, 0);
    const card = new Card('Black Lotus', manaCost, [CardType.ARTIFACT]);

    expect(card.name).toBe('Black Lotus');
    expect(card.manaCost.toString()).toEqual('0C');
    expect(card.types).toEqual(['Artifact']);
  });

  test('Should create a card with optional parameters and the correct properties', () => {
    const card = new Card(
      'Pendelhaven',
      new ManaPool(),
      [CardType.LAND],
      [CardSubType.FOREST],
      [CardSuperType.LEGENDARY]
    );

    expect(card.name).toBe('Pendelhaven');
    expect(card.manaCost.toString()).toEqual('');
    expect(card.types).toEqual(['Land']);
  });

  test('Should create a card with the right color properties', () => {
    let manaCost = new ManaPool().add(manaSymbols.GREEN, 1);
    const card = new Card('My Green creature', manaCost, [CardType.CREATURE]);

    expect(card.hasColor(CardColor.GREEN)).toBe(true);
    expect(card.hasColor(CardColor.BLACK)).toBe(false);
    expect(card.hasColor(CardColor.BLUE)).toBe(false);
    expect(card.hasColor(CardColor.RED)).toBe(false);
    expect(card.hasColor(CardColor.WHITE)).toBe(false);
    expect(card.hasColor(CardColor.COLORLESS)).toBe(false);
  });

  test('Should create a card with the right color properties', () => {
    let manaCost = new ManaPool()
      .add(manaSymbols.GREEN, 1)
      .add(manaSymbols.RED, 1);
    const card = new Card('My Green/Red Creature', manaCost, [
      CardType.CREATURE,
    ]);

    expect(card.hasColor(CardColor.GREEN)).toBe(true);
    expect(card.hasColor(CardColor.RED)).toBe(true);
    expect(card.hasColor(CardColor.BLACK)).toBe(false);
    expect(card.hasColor(CardColor.BLUE)).toBe(false);
    expect(card.hasColor(CardColor.WHITE)).toBe(false);
    expect(card.hasColor(CardColor.COLORLESS)).toBe(false);
  });

  test('Should clone a card correctly', () => {
    let manaCost = new ManaPool().add(manaSymbols.GREEN, 1);
    const card = new Card('My Green creature', manaCost, [CardType.CREATURE]);
    const clonedCard = card.clone();

    expect(clonedCard).not.toBe(card);
    expect(JSON.stringify(clonedCard)).toEqual(JSON.stringify(card));

    expect(clonedCard.name).toBe('My Green creature');
    expect(clonedCard.manaCost.toString()).toEqual('1G');
    expect(clonedCard.types).toEqual(['Creature']);
  });
});
