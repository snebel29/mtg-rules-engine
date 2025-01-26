import { Zone, Library, Hand, Graveyard } from './Zones';
import { Card, CardType } from '@game/Card';
import { ManaPool } from '@game/Mana';

describe('Zones', () => {
  let cards: Card[];

  beforeEach(() => {
    cards = [
      new Card('Card1', new ManaPool(), [CardType.LAND]),
      new Card('Card2', new ManaPool(), [CardType.LAND]),
    ];
  });

  test('Zone should initialize correctly when no cards are provided', () => {
    const zone = new Zone();

    expect(zone.countCards()).toEqual(0);
  });

  test('Zone should initialize correctly', () => {
    const zone = new Zone(cards);

    expect(zone.getCards()).toEqual(cards);
    expect(zone.countCards()).toBe(2);
  });

  test('Zone should add cards correctly', () => {
    const zone = new Zone(cards);
    const oldCards = cards.slice();

    const newCard = new Card('Card3', new ManaPool(), [CardType.LAND]);
    zone.add(newCard);

    expect(zone.getCards()).toEqual([...oldCards, newCard]);
    expect(zone.countCards()).toBe(3);
  });

  test('Zone should shuffle cards correctly', () => {
    const zone = new Zone(cards);

    const shuffleSpy = jest.spyOn(zone.cards, 'shuffle');
    zone.suffle();
    expect(shuffleSpy).toHaveBeenCalled();
    shuffleSpy.mockRestore();
  });
});
