import React from 'react';
import { connect } from 'react-redux';

import '../Style/Card.css';
import sword from '../Pictures/icons-epee.png';
import heart from '../Pictures/icons-coeurs.png';
import hammer from '../Pictures/icons-marteau-de-thor.png';
import {
  addToPlayerDeck,
  removeFromPlayerDeck,
  isInDeck,
} from '../Redux/cardsSlice';

function Card({ heroe, index, togglePresenceInDeck, inDeck }) {
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

export default connect(
  (state, { heroe }) => {
    return {
      inDeck: isInDeck(heroe.id)(state),
    };
  },
  (dispatch, { heroe }) => {
    return {
      addToPlayerDeck: () => dispatch(addToPlayerDeck({ ...heroe })),
      removeFromPlayerDeck: () => dispatch(removeFromPlayerDeck({ ...heroe })),
    };
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      togglePresenceInDeck: () => {
        if (stateProps.inDeck) dispatchProps.removeFromPlayerDeck();
        else dispatchProps.addToPlayerDeck();
      },
    };
  }
)(Card);
