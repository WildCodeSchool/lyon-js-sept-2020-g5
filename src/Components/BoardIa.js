import React from 'react';
import CardOfDeckBoardIa from './CardOfDeckBoardIa';

const Board = (props) => {
  const { heroes } = props;
  console.log(
    "Pourant ici le tableau n'est pas vide au moment de l'enchainement, c'est pour cela qu'on voit la carte à l'écran !",
    heroes
  );
  // (Alors que la prop vient de DeckBoard et que ce composant chope la valeur dans le DeckContext. Mais pourant, dans le contexte, le tableau apparait vide lors de l'execution de l'enchainement. Mystère ! Hé beh, je dirais qu'il soit possible, probable, voir certain que ça soit un coup des Closures :O
  // Pour plus d'info : https://dmitripavlutin.com/react-hooks-stale-closures/
  return (
    <>
      {heroes.map((hero, index) => {
        return <CardOfDeckBoardIa key={hero.name} heroe={hero} index={index} />;
      })}
    </>
  );
};
export default Board;
