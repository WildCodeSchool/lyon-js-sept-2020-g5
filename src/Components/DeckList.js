import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Howl } from 'howler';
import fight from '../Audio/fight.wav';
import CardsInDeck from './CardsInDeck';
import { DeckContext } from '../Contexts/DeckContextProvider';
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

  const audioClips3 = new Howl({
    src: [fight],
  });

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
    if (sumPower() === 0) {
      window.alert('You must choose at leat one heroe');
    } else {
      const deckForHand = deck.slice();
      for (let i = 0; i < deckForHand.length; i += 1) {
        deckForHand[i].position = 'hand';
      }
      setDeck(deckForHand);
      history.push('/deckBoard');
      audioClips3.play();
    }
  };

  const toggleReadyForFightAlert = () => {
    if (sumPower() === 0) {
      window.alert('You must choose at leat one heroe');
    } else {
      setReadyForFight(!readyForFight);
    }
  };

  const toggleReadyForFightNoAlert = () => {
    setReadyForFight(!readyForFight);
  };

  return (
    <div className="deckContainer">
      <div className={view}>
        <div className="playerDeck">
          <div className="totalPower">
            TOTAL POWER :{' '}
            <p>
              {sumPower()} /{maxPower}
            </p>
          </div>
          <div className="deck">
            <p>DECK</p>
            {deck.map((heroe) => (
              <CardsInDeck
                key={heroe.name}
                j
                heroechoice={heroe}
                addToDeck={addToDeck}
                heroe={heroe}
              />
            ))}
          </div>
          <div className="pseudoPlayer">PSEUDO : {pseudo}</div>

          <div className="buttonStartDiv">
            <button
              className="decklist-btn"
              type="button"
              onClick={toggleReadyForFightAlert}
            >
              Start
            </button>
          </div>
        </div>
      </div>
      <div className={confirmationWindow}>
        <h2>Check your team</h2>
        <div className="confirmationView">
          {deck.map((hero, index) => {
            return <Card key={hero.id} heroe={hero} index={index} />;
          })}
        </div>
        <div>
          <button
            className="decklist-btn whiteButton"
            type="button"
            onClick={toggleReadyForFightNoAlert}
          >
            Manage your team
          </button>
          <button
            className="decklist-btn"
            type="button"
            onClick={handlePositionHand}
          >
            fight
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckList;
