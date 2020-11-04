import React from 'react';
import CardList from './CardList';
import DeckList from './DeckList';

function Game({ heroes }) {
  return (
    <div>
      <h1>Game</h1>
      <CardList heroes={heroes} />
      <DeckList />
    </div>
  );
}

export default Game;
