import React, { useContext } from 'react';
import { CardsContext } from '../Contexts/CardsContextProvider';
import Card from './Card';
import '../Style/CardList.css';
import { DeckContext } from '../Contexts/DeckContextProvider';

function CardList() {
  const { cards } = useContext(CardsContext);
  const { readyForFight } = useContext(DeckContext);

  const deckChoiceWindow = readyForFight
    ? 'cardList displayNone'
    : 'cardList display';

  return (
    <main className={deckChoiceWindow}>
      {cards.map((hero, index) => {
        return <Card key={hero.id} heroe={hero} index={index} />;
      })}
    </main>
  );
}

export default CardList;
