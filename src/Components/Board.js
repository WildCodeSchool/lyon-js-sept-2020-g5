import React from 'react';
import CardInBoard from './CardInBoard';

const Board = (props) => {
  const { heroes } = props;
  return (
    <>
      {heroes.map((hero, index) => {
        return <CardInBoard key={hero.name} heroe={hero} index={index} />;
      })}
    </>
  );
};
export default Board;
