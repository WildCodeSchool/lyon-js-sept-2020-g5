import React from 'react';
import '../Style/Card.css';
import sword from '../Pictures/icons-epee.png';
import heart from '../Pictures/icons-coeurs.png';
import hammer from '../Pictures/icons-marteau-de-thor.png';

function Card(props) {
  const { name, img, atk, hp, power } = props;
  return (
    <div className="card">
      <div className="heroName">{name}</div>
      <div className="imgCard">
        <img src={img} alt={name} />
      </div>
      <div className="attack">
        <img src={sword} alt="sword icons" /> {atk}
      </div>
      <div className="healthPoints">
        <img src={heart} alt="heart icons" /> {hp}
      </div>
      <div className="power">
        <img src={hammer} alt="hammer icons" /> {power}
      </div>
    </div>
  );
}

export default Card;
