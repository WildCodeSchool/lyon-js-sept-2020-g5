import React from 'react';
import '../Style/hiddenCards.css';

const HiddenCards = (props) => {
  const { heroes } = props;
  return (
    <div className="hiddenCardBlock">
      <div className="deckCount">{heroes.length}</div>
    </div>
  );
};

export default HiddenCards;
