import React from 'react';
import { useSelector } from 'react-redux';
import HallCard from './HallCard';
import '../Style/hallOfHeroes.css';
import { getAllCards } from '../Redux/cardsSlice';

const HallOfHeroes = () => {
  const cards = useSelector(getAllCards);

  return (
    <div className="hallOfHeroesContainer">
      <h1>Hall of heroes</h1>
      <div className="hallOfHeroes">
        {cards.map((hero) => (
          <HallCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

export default HallOfHeroes;
