import React from 'react';
import '../Style/CardInGraveyard.css';

const CardInGraveyard = (props) => {
  const { hero } = props;

  return <div className="cardInGraveyard">{hero.name}</div>;
};
export default CardInGraveyard;
