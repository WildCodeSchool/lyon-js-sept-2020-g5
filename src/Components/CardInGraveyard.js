import React from 'react';
import '../Style/CardsInDeck.css';

const CardInGraveyard = (props) => {
  const { hero } = props;
  const { name } = hero.name;
  return <div className="cardInTheDeck">{name}</div>;
};
export default CardInGraveyard;
