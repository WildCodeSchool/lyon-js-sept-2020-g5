import React from 'react';
import Card from './Card';
import '../Style/CardList.css';

function CardList({ heroes, addToDeck }) {
  return (
    <main className="cardList">
      {heroes.map((hero, index) => {
        return (
          <Card
            key={hero.id}
            heroe={hero}
            index={index}
            addToDeck={addToDeck}
          />
        );
      })}
    </main>
  );
}

export default CardList;
