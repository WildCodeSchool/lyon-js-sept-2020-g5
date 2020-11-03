import React from 'react';
import Card from './Card';
import '../Style/CardList.css';

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
