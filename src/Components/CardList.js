import React, { useContext } from 'react';
import CardsContext from '../Contexts/CardsContext';
import Card from './Card';
import '../Style/CardList.css';

function CardList({ addToDeck, heroesChosen }) {
  const { cards } = useContext(CardsContext);
  return (
    <main className="cardList">
      {cards.map((hero, index) => {
        return (
          <Card
            key={hero.id}
            heroe={hero}
            index={index}
            addToDeck={addToDeck}
            heroesChosen={heroesChosen}
          />
        );
      })}
    </main>
  );
}

export default CardList;
