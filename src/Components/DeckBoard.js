import React from 'react';

function DeckBoard() {
  return (
    <div className="deckBoard">
      <div className="mainContainer">
        <div className="iaHand">
          <div className="hiddenCardIa"></div>
        </div>

        <div className="boardContainer">
          <div className="boardIa"></div>
          <div className="boarPlayer"></div>
        </div>

        <div className="playerHand">
          <div className="hiddenCardPlayer1"></div>
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
