import React, { useContext } from 'react';
import DeckContext from '../Contexts/DeckContext';
import CardsInDeck from './CardsInDeck';
import '../Style/DeckList.css';
import OptionsContext from '../Contexts/OptionsContext';

function DeckList() {
  const { pseudo, maxPower } = useContext(OptionsContext);
  const { deck, addToDeck } = useContext(DeckContext);

  function sumPower() {
    let currentPower = 0;
    currentPower = deck
      .map((heroeChoosen) => heroeChoosen.power)
      .reduce((acc, cur) => acc + cur, 0);
    return currentPower;
  }

  return (
    <div className="playerDeck">
      <div className="totalPower">
        TOTAL POWER : {sumPower()} /{maxPower}
      </div>

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
