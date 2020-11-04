import React from 'react';
import '../Style/DeckList.css';

function DeckList() {
  return (
    <div className="playerDeck">
      <div className="totalPower">TOTAL POWER</div>
      <div className="deck">DECK</div>
      <div className="pseudoPlayer">PSEUDO</div>
    </div>
  );
}

export default DeckList;
