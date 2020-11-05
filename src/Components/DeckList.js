import React from 'react';
import CardsInDeck from './CardsInDeck';
import '../Style/DeckList.css';

function DeckList(props) {
  const { heroesChosen, addToDeck, pseudo, maxPower } = props;
  return (
    <div className="playerDeck">
      <div className="totalPower">TOTAL POWER : XX /{maxPower}</div>

      <div className="deck">DECK</div>
      {heroesChosen.map((heroe) => (
        <CardsInDeck
          key={heroe.name}
          heroechoice={heroe}
          addToDeck={addToDeck}
        />
      ))}
      <div className="pseudoPlayer">PSEUDO : {pseudo}</div>
    </div>
  );
}

export default DeckList;
