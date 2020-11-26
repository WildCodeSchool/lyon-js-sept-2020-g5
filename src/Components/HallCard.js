import React from 'react';
import '../Style/hallCard.css';

function HallCard(props) {
  const { name, img, atk, hp, power, alignment } = props;
  return (
    <div className="card">
      <div className="imgCard">
        <img src={img} alt={name} />
      </div>
      <div className="stats">
        <h1 className="heroName">{name}</h1>
        <br />
        <p>
          Attack : <span className="statsInfo">{atk}</span>
          <br />
          Power : <span className="statsInfo">{power}</span>
          <br />
          HP : <span className="statsInfo">{hp}</span>
          <br />
          Alignment : <span className="statsInfo">{alignment}</span>
        </p>
      </div>
    </div>
  );
}

export default HallCard;
