import React from 'react';
import CardList from './CardList';
import DeckList from './DeckList';
import '../Style/Game.css';

function Game({ heroes, heroesChosen, addToDeck, maxPower, pseudo }) {
  return (
    <div>
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
      <div className="Portrait">
        <img
          src="https://karagezwebstudio.com/fr/img/rotate.gif"
          alt="turn phone"
        />
        <p>Please turn your Smartphone into landcape orientation</p>
      </div>
    </div>
  );
}

export default Game;
