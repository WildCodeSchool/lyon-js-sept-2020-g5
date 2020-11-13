import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DeckContext } from '../Contexts/DeckContextProvider';
import CardsInDeck from './CardsInDeck';
import '../Style/DeckList.css';
import { OptionsContext } from '../Contexts/OptionsContextProvider';

function DeckList() {
  const { pseudo, maxPower } = useContext(OptionsContext);
  const { deck, addToDeck, setDeck } = useContext(DeckContext);
  const history = useHistory();

  function sumPower() {
    let currentPower = 0;
    currentPower = deck
      .map((heroeChoosen) => heroeChoosen.power)
      .reduce((acc, cur) => acc + cur, 0);
    return currentPower;
  }

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
      <div className="totalPower">
        <p>
          TOTAL POWER : {sumPower()} /{maxPower}
        </p>
      </div>

      <div className="deck">
        DECK
        {deck.map((heroe) => (
          <CardsInDeck
            key={heroe.name}
            heroechoice={heroe}
            addToDeck={addToDeck}
            heroe={heroe}
          />
        ))}
      </div>
      <div className="pseudoPlayer">
        <p>PSEUDO : {pseudo}</p>
      </div>
      <div className="buttonStartDiv">
        <button
          className="buttonStart"
          type="button"
          onClick={handlePositionHand}
        >
          START
        </button>
      </div>
    </div>
  );
}

export default DeckList;
