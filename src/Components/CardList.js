import React from 'react';
import Card from './Card';

function CardList({ heroes }) {
  return (
    <main className="cardList">
      {heroes.map((hero) => {
        return <Card key={hero.id} {...hero} />;
      })}
    </main>
  );
}

export default CardList;
