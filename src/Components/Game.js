import React from 'react';
import CardList from './CardList';
import DeckList from './DeckList';
import '../Style/Game.css';

function Game() {
  return (
    <div>
      <div className="containerDeck">
        <CardList />
        <DeckList />
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
