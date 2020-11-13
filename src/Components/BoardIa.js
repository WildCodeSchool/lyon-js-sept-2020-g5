import React from 'react';
import CardOfDeckBoardIa from './CardOfDeckBoardIa';

const Board = (props) => {
  const { heroes } = props;
  return (
    <>
      {heroes.map((hero, index) => {
        return <CardOfDeckBoardIa key={hero.name} heroe={hero} index={index} />;
      })}
    </>
  );
};
export default Board;
