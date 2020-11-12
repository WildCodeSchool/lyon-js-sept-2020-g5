import React from 'react';
import '../Style/CardOfDeckBoard.css';
import sword from '../Pictures/icons-epee.png';
import heart from '../Pictures/icons-coeurs.png';

const CardOfDeckBoard = (props) => {
  const { heroe } = props;

  return (
    <div
      className={
        heroe.position === 'hand' ? 'cardOfDeckBoard' : 'cardOfDeckBoard IaHand'
      }
    >
      <div className="heroName">{heroe.name}</div>
      <div className="imgCardDeck">
        <img src={heroe.img} alt={heroe.name} />
      </div>
      <div className={heroe.position === 'hand' ? 'attack' : 'forIaHand'}>
        <span className="forIaHand">
          <img src={sword} alt="sword icons" /> {heroe.atk}
        </span>
      </div>
      <div className={heroe.position === 'hand' ? 'healthPoints' : 'forIaHand'}>
        <span className="forIaHand">
          <img src={heart} alt="heart icons" /> {heroe.hp}
        </span>
      </div>
    </div>
  );
};

export default CardOfDeckBoard;
