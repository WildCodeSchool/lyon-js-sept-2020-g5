import React from 'react';
import '../Style/Card.css';
import sword from '../Pictures/icons-epee.png';
import heart from '../Pictures/icons-coeurs.png';
import hammer from '../Pictures/icons-marteau-de-thor.png';

function Card({ heroe, addToDeck, index }) {
  return (
    <div
      className="card"
      role="button"
      tabIndex={index}
      onClick={() => addToDeck(heroe.name)}
    >
      <div className="heroName">{heroe.name}</div>
      <div className="imgCard">
        <img src={heroe.img} alt={heroe.name} />
      </div>
      <div className="attack">
        <img src={sword} alt="sword icons" /> {heroe.atk}
      </div>
      <div className="healthPoints">
        <img src={heart} alt="heart icons" /> {heroe.hp}
      </div>
      <div className="power">
        <img src={hammer} alt="hammer icons" /> {heroe.power}
      </div>
    </div>
  );
}

export default Card;
