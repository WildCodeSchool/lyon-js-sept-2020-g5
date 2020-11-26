import React, { useContext } from 'react';
import HallCard from './HallCard';
import { CardsContext } from '../Contexts/CardsContextProvider';

const HallOfHeroes = () => {
  const { cards } = useContext(CardsContext);

  return (
    <div>
      <h1 className="hall-title" style={{fontFamily:'Pink' }}>Hall of heroes</h1>
      <div className="hallOfHeroes">
        {cards.map((hero) => (
          <HallCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

export default HallOfHeroes;
