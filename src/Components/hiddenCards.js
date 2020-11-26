import React from 'react';
import '../Style/hiddenCards.css';

const HiddenCards = (props) => {
  const { heroes } = props;
  return (
    <div className="hiddenCardBlock">
      <div className="deckCount">Cards left : <strong>{heroes.length}</strong></div>
    </div>
  );
};

export default HiddenCards;
