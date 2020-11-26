import React from 'react';
import '../Style/hiddenCards.css';

const HiddenCards = (props) => {
  const { heroes } = props;
  return (
    <div className="hiddenCardBlock">
      <p>Card(s) in the deck : </p>
      <div className="deckCount">{heroes.length}</div>
    </div>
  );
};

export default HiddenCards;
