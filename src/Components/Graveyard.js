import React from 'react';
import CardInGraveyard from './CardInGraveyard';

const Graveyard = (props) => {
  const { heroes } = props;
  return (
    <>
      {heroes.map((hero, index) => {
        return <CardInGraveyard key={hero.name} heroe={hero} index={index} />;
      })}
    </>
  );
};
export default Graveyard;
