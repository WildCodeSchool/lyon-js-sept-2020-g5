import React, { useContext } from 'react';
import CardList from './CardList';
import DeckList from './DeckList';
import '../Style/Game.css';
import { DeckContext } from '../Contexts/DeckContextProvider';
import Rotate from '../Pictures/rotate_img_proj.gif';

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
        <img src={Rotate} alt="turn phone" />
        <p>Please turn your Smartphone into landcape orientation</p>
      </div>
    </div>
  );
}

export default Game;
