import React, { useContext } from 'react';
import '../Style/DeckBoard.css';
import '../Style/CardOfDeckBoard.css';
import DeckContext from '../Contexts/DeckContext';
import CardOfDeckBoard from './CardOfDeckBoard';

function DeckBoard() {
  const { deck } = useContext(DeckContext);
  return (
    <div className="deckBoard">
      <div className="mainContainer">
        <div className="iaHand">
          <div className="hiddenCardIa" />
        </div>

        <div className="boardContainer">
          <div className="boardIa" />
          <div className="boarPlayer" />
        </div>

        <div className="playerHand">
          {deck
            .filter((heroe) => heroe.position === 'hand')
            .map((heroe) => (
              <CardOfDeckBoard key={heroe.name} heroe={heroe} />
            ))}
          <div className="hiddenCardPlayer1" />
        </div>
      </div>

      <div className="sideContainer">
        <div>button quit</div>
        <div className="graveyard">Graveyard</div>
      </div>
    </div>
  );
}

export default DeckBoard;
