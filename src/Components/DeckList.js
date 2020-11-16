import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DeckContext } from '../Contexts/DeckContextProvider';
import CardsInDeck from './CardsInDeck';
import '../Style/DeckList.css';
import Card from './Card';
import { OptionsContext } from '../Contexts/OptionsContextProvider';

function DeckList() {
  const { pseudo, maxPower } = useContext(OptionsContext);
  const {
    deck,
    addToDeck,
    setDeck,
    readyForFight,
    setReadyForFight,
  } = useContext(DeckContext);
  const history = useHistory();

  const confirmationWindow = readyForFight
    ? 'cardList display specialFlex'
    : 'cardList displayNone';

  const view = readyForFight ? 'deckConfirmation' : 'playerDeck';

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

  const toggleReadyForFight = () => {
    setReadyForFight(!readyForFight);
    console.log(`readyForFight is now equal to ${readyForFight}`);
  };

  console.log(`readyForFight is now equal to ${readyForFight}`);
  return (
    <div className="deckContainer">
      <div className={view}>
        <div className="deckContainer">
          <div className="pseudoPlayer">PSEUDO : {pseudo}</div>
          <div className="totalPower">
            TOTAL POWER : {sumPower()} /{maxPower}
          </div>
          <div className="deck">DECK</div>
          {deck.map((heroe) => (
            <CardsInDeck
              key={heroe.name}
              j
              heroechoice={heroe}
              addToDeck={addToDeck}
              heroe={heroe}
            />
          ))}
          <button type="button" onClick={toggleReadyForFight}>
            Start
          </button>
        </div>
      </div>
      <div className={confirmationWindow}>
        <h2>Your team</h2>
        <div className="confirmationView">
          {deck.map((hero, index) => {
            return <Card key={hero.id} heroe={hero} index={index} />;
          })}
        </div>
        <h3>Are you sure of the composition of your team ?</h3>
        <div>
          <button type="button" onClick={toggleReadyForFight}>
            Come back
          </button>
          <button type="button" onClick={handlePositionHand}>
            fight
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckList;
