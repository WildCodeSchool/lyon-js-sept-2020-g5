import React from 'react';
import '../Style/Game.css';

const Game = () => {
  return (
    <div className="pageGame">
      <div className="Portrait">
        <img
          src="https://karagezwebstudio.com/fr/img/rotate.gif"
          alt="turn phone"
        />
        <p>Please turn your Smartphone into landcape orientation</p>
      </div>

      <div className="Paysage" />
    </div>
  );
};

export default Game;
