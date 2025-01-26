import { Hand, Library, Graveyard, Zone } from '@game/Zones';
import { Participant } from '@game/Participant';

export class Player {
  name: string;
  life: number;

  hand: Hand;
  library: Library;
  graveyard: Graveyard;

  private participant: Participant;

  constructor(participant: Participant, life: number) {
    this.name = participant.name;
    this.participant = participant;
    this.life = life;

    // Clone the list of cards, this will enable us to modify cards
    // during the game, without affecting the original deck cards.
    this.library = new Library(
      participant.deck.cards.getItems().map((card) => card.clone())
    );
    this.library.suffle();

    this.hand = new Hand();
    this.graveyard = new Graveyard();
  }

  draw(count: number): void {
    this.moveCardsFromZoneToZone(count, this.library, this.hand);
  }

  mill(count: number): void {
    this.moveCardsFromZoneToZone(count, this.library, this.graveyard);
  }

  private moveCardsFromZoneToZone(
    count: number,
    origin: Zone,
    destination: Zone
  ): void {
    for (let i = 0; i < count; i++) {
      const card = origin.cards.pop();
      if (card) {
        destination.add(card);
        continue;
      }
      throw new Error(
        `After moving ${i} cards from ${origin.constructor.name} to ${destination.constructor.name} ` +
          `there is no more cards to move`
      );
    }
  }
}
