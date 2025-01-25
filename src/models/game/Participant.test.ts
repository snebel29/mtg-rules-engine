import { Deck, Sideboard, Participant } from './Participant';
import { Card, CardType } from '@models/game/Card';
import { ManaPool } from '@models/game/Mana';

describe('Participant', () => {
  test('Deck should initialize correctly', () => {
    const cards = [
      new Card('Card1', new ManaPool(), [CardType.LAND]),
      new Card('Card2', new ManaPool(), [CardType.LAND]),
    ];
    const deck = new Deck('MyDeck', cards);

    expect(deck.name).toBe('MyDeck');
    expect(deck.cards.getItems()).toEqual(cards);

    const shuffleSpy = jest.spyOn(deck.cards, 'shuffle');
    deck.suffle();
    expect(shuffleSpy).toHaveBeenCalled();
    shuffleSpy.mockRestore();
  });

  test('Sideboard should initialize correctly', () => {
    const cards = [
      new Card('Card1', new ManaPool(), [CardType.LAND]),
      new Card('Card2', new ManaPool(), [CardType.LAND]),
    ];
    const deck = new Sideboard(cards);

    expect(deck.cards.getItems()).toEqual(cards);
  });

  test('Participant should initialize correctly', () => {
    const cards = [
      new Card('Card1', new ManaPool(), [CardType.LAND]),
      new Card('Card2', new ManaPool(), [CardType.LAND]),
    ];
    const deck = new Deck('MyDeck', cards);
    const participant = new Participant('Alice', deck);

    expect(participant.name).toBe('Alice');
    expect(participant.deck).toBe(deck);

    const sideboard = new Sideboard(cards);
    const participantWithSideboard = new Participant('Alice', deck, sideboard);
    expect(participantWithSideboard.name).toBe('Alice');
    expect(participantWithSideboard.deck).toBe(deck);
    expect(participantWithSideboard.sideboard).toBe(sideboard);
  });
});
