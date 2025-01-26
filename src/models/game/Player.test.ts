import { Player } from './Player';
import { Deck, Participant } from '@game/Participant';
import { Card, CardType } from '@models/game/Card';
import { ManaPool } from '@models/game/Mana';
import { Hand, Library, Graveyard } from '@game/Zones';

describe('Player', () => {
  let cards: Card[];
  let deck: Deck;
  let participant: Participant;

  beforeEach(() => {
    cards = [
      new Card('Card1', new ManaPool(), [CardType.LAND]),
      new Card('Card2', new ManaPool(), [CardType.LAND]),
    ];
    deck = new Deck('MyDeck', cards);
    participant = new Participant('Alice', deck);
  });

  test('Should initialize correctly', () => {
    const player = new Player(participant, 20);

    expect(player.name).toBe('Alice');
    expect(player.life).toBe(20);
    expect(player.library.countCards()).toBe(2);
    expect(player.hand.countCards()).toBe(0);
    expect(player.graveyard.countCards()).toBe(0);
  });

  test('Should copy cards from deck to library during initialization', () => {
    const player = new Player(participant, 20);

    const libraryCards = player.library.getCards();
    const deckCards = participant.deck.cards.getItems();

    expect(libraryCards.length).toBe(deckCards.length);

    // TODO: Check that each card in the library has a corresponding card in the deck with the same properties
    // but different onject references (They are different).
  });

  test('Should shuffle the library correctly', () => {
    const player = new Player(participant, 20);

    const shuffleSpy = jest.spyOn(player.library.cards, 'shuffle');
    player.library.suffle();
    expect(shuffleSpy).toHaveBeenCalledTimes(1);
    shuffleSpy.mockRestore();
  });

  test('Should draw cards correctly', () => {
    const player = new Player(participant, 20);

    player.draw(1);
    expect(player.hand.countCards()).toBe(1);
    expect(player.library.countCards()).toBe(1);

    player.draw(1);
    expect(player.hand.countCards()).toBe(2);
    expect(player.library.countCards()).toBe(0);

    expect(() => player.draw(1)).toThrow(
      'After moving 0 cards from Library to Hand there is no more cards to move'
    );
  });

  test('Should mill cards correctly', () => {
    const player = new Player(participant, 20);

    player.mill(2);
    expect(player.hand.countCards()).toBe(0);
    expect(player.graveyard.countCards()).toBe(2);

    expect(() => player.mill(1)).toThrow(
      'After moving 0 cards from Library to Graveyard there is no more cards to move'
    );
  });
});
