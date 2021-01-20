import React from 'react';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Howl } from 'howler';
import fight from '../Audio/fight.wav';
import CardsInDeck from './CardsInDeck';
import '../Style/DeckList.css';
import Card from './Card';
import { getAllCards } from '../Redux/cardsSlice';
import {
  addToPlayerDeck,
  getPlayerDeck,
  startDeckReview,
  startFight,
  startDeckEdition,
  createIaDeck,
  isReviewingDeck,
} from '../Redux/gameSlice';
import { getOptions } from '../Redux/optionsSlice';

function DeckList() {
  const { playerName, maxPower } = useSelector(getOptions);
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    {
      addToPlayerDeck,
      startFight,
      createIaDeck,
      startDeckReview,
      startDeckEdition,
    },
    dispatch
  );
  const playerDeck = useSelector(getPlayerDeck);
  const reviewing = useSelector(isReviewingDeck);
  const history = useHistory();
  const audioClips3 = new Howl({
    src: [fight],
  });
  const allCards = useSelector(getAllCards);

  const totalPower = playerDeck
    .map((heroeChoosen) => heroeChoosen.power)
    .reduce((acc, cur) => acc + cur, 0);

  const handleFightButtonClick = () => {
    actions.createIaDeck(allCards, maxPower);
    actions.startFight();
    history.push('/deckBoard');
    audioClips3.play();
  };

  const toggleReadyForFightAlert = () => {
    if (totalPower === 0) {
      window.alert('You must choose at leat one heroe');
    } else if (maxPower <= totalPower) {
      alert('Maximum deck power exceeded, please remove cards from your deck');
    } else {
      actions.startDeckReview();
    }
  };

  const confirmationWindow = reviewing
    ? 'cardList display specialFlex'
    : 'cardList displayNone';
  const view = reviewing ? 'deckConfirmation' : 'playerDeck';

  return (
    <div className="deckContainer">
      <div className={view}>
        <div className="playerDeck">
          <div className="totalPower">
            TOTAL POWER :{' '}
            <p>
              {totalPower} / {maxPower}
            </p>
          </div>
          <div className="deck">
            <p style={{ marginBottom: 15 }}>DECK</p>
            {playerDeck
              .map((heroe) => (
                <CardsInDeck
                  key={heroe.id}
                  heroechoice={heroe}
                  addToDeck={actions.addToPlayerDeck}
                  heroe={heroe}
                />
              ))
              .reverse()}
          </div>
          <div className="pseudoPlayer">PSEUDO : {playerName}</div>

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
            className="decklist-btn whiteButton"
            type="button"
            onClick={() => actions.startDeckEdition()}
          >
            Manage your team
          </button>
          <button
            className="decklist-btn"
            type="button"
            onClick={handleFightButtonClick}
          >
            fight
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckList;
