import React from 'react';
import { useSelector } from 'react-redux';
import CardList from './CardList';
import DeckList from './DeckList';
import '../Style/Game.css';
import Rotate from '../Pictures/rotate_img_proj.gif';
import { isReviewingDeck } from '../Redux/gameSlice';

function Game() {
  const reviewing = useSelector(isReviewingDeck);

  return (
    <div className="containerGame">
      <div
        className={reviewing ? 'containerDeckConfirmation' : 'containerDeck'}
      >
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
