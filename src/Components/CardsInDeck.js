import React from 'react';
import '../Style/CardsInDeck.css';

const CardInDeck = (props) => {
  const { heroechoice } = props;
  const { name } = heroechoice;
  return <div className="cardInTheDeck">{name}</div>;
};
export default CardInDeck;
