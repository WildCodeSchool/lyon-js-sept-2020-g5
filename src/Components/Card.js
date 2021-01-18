import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../Style/Card.css';
import sword from '../Pictures/icons-epee.png';
import heart from '../Pictures/icons-coeurs.png';
import hammer from '../Pictures/icons-marteau-de-thor.png';
import {
  addToPlayerDeck,
  removeFromPlayerDeck,
  isInPlayerDeck,
} from '../Redux/gameSlice';

function Card({ heroe, index }) {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { addToPlayerDeck, removeFromPlayerDeck },
    dispatch
  );
  const inDeck = useSelector((state) => isInPlayerDeck(heroe.id)(state));
  const togglePresenceInDeck = inDeck
    ? () => actions.removeFromPlayerDeck(heroe)
    : () => actions.addToPlayerDeck(heroe);

  return (
    <div
      className={!inDeck ? 'cardDeck' : 'cardDeck selected'}
      role="button"
      tabIndex={index}
      onClick={togglePresenceInDeck}
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
