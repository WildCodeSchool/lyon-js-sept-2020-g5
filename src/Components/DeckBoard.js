import React, { useContext, useEffect } from 'react';
import _ from 'lodash';
import DeckContext from '../Contexts/DeckContext';
import CardOfDeckBoard from './CardOfDeckBoard';
import CardsContext from '../Contexts/CardsContext';
import '../Style/DeckBoard.css';
import '../Style/CardOfDeckBoard.css';
import OptionsContext from '../Contexts/OptionsContext';

function DeckBoard() {
  const { deck, deckIa, setDeckIa } = useContext(DeckContext);
  const { cards } = useContext(CardsContext);
  const { maxPower } = useContext(OptionsContext);

  const createIaDeck = () => {
    const shuffleCards = _.shuffle(cards); // utilisation de lodash pour melanger les carte provenant de l'API
    let iaDeckPower = 0;
    const cardForIa = [];

    for (
      let i = 0;
      i < shuffleCards.length && iaDeckPower <= maxPower;
      i += 1
    ) {
      if (shuffleCards[i].power < maxPower - iaDeckPower) {
        cardForIa.push({ ...shuffleCards[i], position: 'handIA' });
        iaDeckPower += shuffleCards[i].power;
      }
    }
    setDeckIa(cardForIa);
  };

  useEffect(() => {
    createIaDeck();
  }, []);

  return (
    <div className="deckBoard">
      <div className="mainContainer">
        <div className="iaHand">
          {deckIa
            .filter((heroe) => heroe.position === 'handIA')
            .map((heroe) => (
              <CardOfDeckBoard key={heroe.name} heroe={heroe} />
            ))}
          <div className="hiddenCardIa" />
        </div>

        <div className="boardContainer">
          <div className="boardIa" />
          <div className="boarPlayer" />
          {deck
            .filter((heroe) => heroe.position === 'board' && !heroe.dead)
            .map((heroe) => (
              <CardOfDeckBoard key={heroe.name} heroe={heroe} />
            ))}
        </div>

        <div className="playerHand">
          {deck
            .filter((heroe) => heroe.position === 'hand')
            .map((heroe) => (
              <CardOfDeckBoard key={heroe.name} heroe={heroe} />
            ))}
          <div className="hiddenCardPlayer1" />
        </div>
      </div>

      <div className="sideContainer">
        <div>button quit</div>
        <div className="graveyard">Graveyard</div>
      </div>
    </div>
  );
}

export default DeckBoard;
