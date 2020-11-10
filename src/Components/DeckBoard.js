import React from 'react';
import '../Style/DeckBoard.css';

function DeckBoard() {
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
