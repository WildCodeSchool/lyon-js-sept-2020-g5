import React from 'react';
import CardInBoard from './CardInBoard';

const Board = (props) => {
  const { heroes } = props;
  return (
    <>
      {heroes.map((hero, index) => {
        return <CardInBoard key={hero.id} heroe={hero} index={index} />;
      })}
    </>
  );
};
export default Board;
