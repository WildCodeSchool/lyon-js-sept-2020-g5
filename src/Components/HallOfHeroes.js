import React, { useContext } from 'react';
import HallCard from './HallCard';
import { CardsContext } from '../Contexts/CardsContextProvider';
import '../Style/HallOfHeroes.css';

const HallOfHeroes = () => {
  const { cards } = useContext(CardsContext);

  return (
    <div className="HallContainer">
      <h1 className="Hall">Hall of heroes</h1>
      <div className="hallOfHeroes">
        {cards.map((hero) => (
          <HallCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

export default HallOfHeroes;
