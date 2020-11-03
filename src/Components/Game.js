import React from 'react';
import CardList from './CardList';

function Game({ heroes }) {
  return (
    <div>
      <h1>Game</h1>
      <CardList heroes={heroes} />
    </div>
  );
}

export default Game;
