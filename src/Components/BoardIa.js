import React from 'react';
import CardInBoardIa from './CardInBoardIa';

const Board = (props) => {
  const { heroes } = props;
  return (
    <>
      {heroes.map((hero, index) => {
        return <CardInBoardIa key={hero.id} heroe={hero} index={index} />;
      })}
    </>
  );
};
export default Board;
