import React, { useContext } from 'react';
import '../Style/Card.css';
import { DeckContext } from '../Contexts/DeckContextProvider';
import sword from '../Pictures/icons-epee.png';
import heart from '../Pictures/icons-coeurs.png';
import hammer from '../Pictures/icons-marteau-de-thor.png';

function Card({ heroe, index }) {
  const { deck, addToDeck } = useContext(DeckContext);
  return (
    <div
      className={
        deck.filter((heroeDeck) => heroeDeck.name === heroe.name).length === 0
          ? 'cardDeck'
          : 'cardDeck selected'
      }
      role="button"
      tabIndex={index}
      onClick={() => addToDeck(heroe.name)}
    >
      <div className="heroNameDecklist">{heroe.name}</div>
      <div className="imgCardDecklist">
        <img className="imgDecklist" src={heroe.img} alt={heroe.name} />
      </div>
      <div className="attackDecklist">
        <img src={sword} alt="sword icons" /> {heroe.atk}
      </div>
      <div className="healthPointsDecklist">
        <img src={heart} alt="heart icons" /> {heroe.hp}
      </div>
      <div className="powerDecklist">
        <img src={hammer} alt="hammer icons" /> {heroe.power}
      </div>
    </div>
  );
}

export default Card;
