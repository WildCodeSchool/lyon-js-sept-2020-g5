import React, { useContext } from 'react';
import CardList from './CardList';
import DeckList from './DeckList';
import '../Style/Game.css';
import DeckContext from '../Contexts/DeckContext';

function Game() {
  const { readyForFight } = useContext(DeckContext);

  const view = readyForFight ? 'containerDeckConfirmation' : 'containerDeck';

  return (
    <div className="containerGame">
      <div className={view}>
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
