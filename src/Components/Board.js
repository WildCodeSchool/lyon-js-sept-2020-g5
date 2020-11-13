import React from 'react';
import CardOfDeckBoard from './CardOfDeckBoard';

const Board = (props) => {
  const { heroes } = props;
  return (
    <>
      {heroes.map((hero, index) => {
        return <CardOfDeckBoard key={hero.name} heroe={hero} index={index} />;
      })}
    </>
  );
};
export default Board;
