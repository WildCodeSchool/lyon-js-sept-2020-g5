import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from './Card';
import '../Style/CardList.css';
import { fetchCards, getAllCards } from '../Redux/cardsSlice';
import { isReviewingDeck } from '../Redux/gameSlice';

function CardList() {
  const cards = useSelector(getAllCards);
  const dispatch = useDispatch();
  const actions = bindActionCreators({ fetchCards }, dispatch);
  const reviewing = useSelector(isReviewingDeck);

  useEffect(actions.fetchCards, []);

  return (
    <main className={reviewing ? 'cardList displayNone' : 'cardList display'}>
      {cards.map((hero, index) => {
        return <Card key={hero.id} heroe={hero} index={index} />;
      })}
    </main>
  );
}

export default CardList;
