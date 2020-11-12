import React, { useContext } from 'react';
import HallCard from './HallCard';
import CardsContext from '../Contexts/CardsContext';

export default function HallOfHeroes() {
  const { cards } = useContext(CardsContext);

  return (
    <div>
      <h1>Hall of heroes</h1>
      <div className="hallOfHeroes">
        {cards.map((hero) => (
          <HallCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
}
