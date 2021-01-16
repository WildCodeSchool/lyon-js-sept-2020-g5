import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import '../Style/CardList.css';
import { DeckContext } from '../Contexts/DeckContextProvider';
import { fetchCards } from '../Redux/cardsSlice';

function CardList({ cards, fetchAllCards }) {
  useEffect(fetchAllCards, []);

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

export default connect(
  (state) => {
    return {
      cards: state.cards.allCards,
    };
  },
  (dispatch) => {
    return {
      fetchAllCards: () => dispatch(fetchCards()),
    };
  }
)(CardList);
