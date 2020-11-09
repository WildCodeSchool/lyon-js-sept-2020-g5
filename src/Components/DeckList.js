import React, { useContext } from 'react';
import DeckContext from '../Contexts/DeckContext';
import CardsInDeck from './CardsInDeck';
import '../Style/DeckList.css';

function DeckList(props) {
  const { pseudo, maxPower } = props;
  const { deck, addToDeck } = useContext(DeckContext);
  return (
    <div className="playerDeck">
      <div className="totalPower">TOTAL POWER : XX /{maxPower}</div>

      <div className="deck">DECK</div>
      {deck.map((heroe) => (
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
