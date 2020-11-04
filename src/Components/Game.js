import React from 'react';
import CardList from './CardList';
import DeckList from './DeckList';
import '../Style/Game.css';

function Game({ heroes, heroesChosen, addToDeck, maxPower, pseudo }) {
  return (
    <div className="containerDeck">
      <CardList heroes={heroes} addToDeck={addToDeck} />
      <DeckList
        heroes={heroes}
        heroesChosen={heroesChosen}
        addToDeck={addToDeck}
        maxPower={maxPower}
        pseudo={pseudo}
      />
    </div>
  );
}

export default Game;
