import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DeckContext from '../Contexts/DeckContext';
import CardsInDeck from './CardsInDeck';
import '../Style/DeckList.css';
import OptionsContext from '../Contexts/OptionsContext';

function DeckList() {
  const { pseudo, maxPower } = useContext(OptionsContext);
  const { deck, addToDeck, setDeck } = useContext(DeckContext);

  const history = useHistory();

  const handlePositionHand = () => {
    const deckForHand = deck.slice();
    for (let i = 0; i < deckForHand.length; i += 1) {
      deckForHand[i].position = 'hand';
    }
    setDeck(deckForHand);
    history.push('/deckBoard');
  };

  return (
    <div className="playerDeck">
      <div className="totalPower">TOTAL POWER : XX /{maxPower}</div>

      <div className="deck">DECK</div>
      {deck.map((heroe) => (
        <CardsInDeck
          key={heroe.name}
          heroechoice={heroe}
          addToDeck={addToDeck}
          heroe={heroe}
        />
      ))}
      <div className="pseudoPlayer">PSEUDO : {pseudo}</div>
      <div>
        <button type="button" onClick={handlePositionHand}>
          START
        </button>
      </div>
    </div>
  );
}

export default DeckList;
