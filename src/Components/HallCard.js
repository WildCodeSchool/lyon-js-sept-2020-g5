import React from 'react';
import '../Style/hallCard.css';

function HallCard(props) {
  const { name, img, atk, hp, power, universe, alignment } = props;
  return (
    <div className="HallCard">
      <h1>
        Name:
        {name}
      </h1>
      <img src={img} alt={name} />
      <ul>
        <li>Attack :{atk}</li>
        <li>Power :{power}</li>
        <li>HP :{hp}</li>
        <li>Universe :{universe}</li>
        <li>Alignment :{alignment}</li>
      </ul>
    </div>
  );
}

export default HallCard;
