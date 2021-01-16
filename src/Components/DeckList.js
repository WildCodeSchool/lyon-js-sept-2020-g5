import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Howl } from 'howler';
import fight from '../Audio/fight.wav';
import CardsInDeck from './CardsInDeck';
import { DeckContext } from '../Contexts/DeckContextProvider';
import '../Style/DeckList.css';
import Card from './Card';
import { OptionsContext } from '../Contexts/OptionsContextProvider';
import { fetchCards, getPlayerDeckArray } from '../Redux/cardsSlice';

function DeckList({ playerDeck }) {
  const { pseudo, maxPower } = useContext(OptionsContext);
  const { addToDeck, setDeck, readyForFight, setReadyForFight } = useContext(
    DeckContext
  );

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
    currentPower = playerDeck
      .map((heroeChoosen) => heroeChoosen.power)
      .reduce((acc, cur) => acc + cur, 0);
    return currentPower;
  }

  const handlePositionHand = () => {
    if (sumPower() === 0) {
      window.alert('You must choose at leat one heroe');
    } else {
      const deckForHand = playerDeck.slice();
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
              {sumPower()} / {maxPower}
            </p>
          </div>
          <div className="deck">
            <p>DECK</p>
            {playerDeck.map((heroe) => (
              <CardsInDeck
                key={heroe.name}
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
          {playerDeck.map((hero, index) => {
            return <Card key={hero.id} heroe={hero} index={index} />;
          })}
        </div>
        <div>
          <button
            className="playerDecklist-btn whiteButton"
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

export default connect(
  (state) => {
    const {
      cards: { allCards },
    } = state;
    return {
      playerDeck: getPlayerDeckArray(state),
      allCards,
    };
  },
  (dispatch) => {
    return { fetchCards: () => dispatch(fetchCards()) };
  }
)(DeckList);
