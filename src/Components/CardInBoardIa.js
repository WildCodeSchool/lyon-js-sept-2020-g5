import React from 'react';
import '../Style/CardInBoardIa.css';
import sword from '../Pictures/icons-epee.png';
import heart from '../Pictures/icons-coeurs.png';

const CardInBoardIa = (props) => {
  const { heroe } = props;

  return (
    <div
      className={
        heroe.position === 'handIA' ? 'CardInBoardIaIaHand' : 'CardInBoardIa'
      }
    >
      <div className="heroName">{heroe.name}</div>
      <div className="imgCardDeck">
        <img src={heroe.img} alt={heroe.name} />
      </div>
      <div className={heroe.position === 'handIA' ? 'forIaHand' : 'attack'}>
        <img src={sword} alt="sword icons" /> {heroe.atk}
      </div>
      <div
        className={heroe.position === 'handIA' ? 'forIaHand' : 'healthPoints'}
      >
        <img src={heart} alt="heart icons" /> {heroe.hp}
      </div>
    </div>
  );
};

export default CardInBoardIa;
