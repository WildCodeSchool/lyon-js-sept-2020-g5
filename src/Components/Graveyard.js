import React from 'react';
import CardInGraveyard from './CardInGraveyard';

const Graveyard = (props) => {
  const { heroes } = props;
  return (
    <>
      {heroes.map((hero) => {
        return <CardInGraveyard key={hero.id + hero.position} hero={hero} />;
      })}
    </>
  );
};
export default Graveyard;
