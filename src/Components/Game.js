import React from 'react';
import '../Style/Game.css';

const Game = () => {
  return (
    <div>
      <div className="Portrait">
        <h1>Portrait</h1>
        <img
          src="https://karagezwebstudio.com/fr/img/rotate.gif"
          alt="turn phone"
        />
      </div>

      <div className="Paysage">
        <h1>Paysage</h1>
      </div>
    </div>
  );
};

export default Game;
