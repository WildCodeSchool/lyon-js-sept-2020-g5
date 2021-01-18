import React from 'react';
import '../Style/CardInBoard.css';
import sword from '../Pictures/icons-epee.png';
import heart from '../Pictures/icons-coeurs.png';
import { isInHand } from '../Redux/gameSlice';

const CardInBoard = (props) => {
  const { heroe, index } = props;
  const inHand = isInHand(heroe);

  return (
    <div
      style={{ zoom: heroe.isFighting ? 1.5 : 1 }}
      className={inHand ? 'CardInBoard' : 'CardInBoard IaHand'}
      role="button"
      tabIndex={index}
    >
      <div className="heroName">{heroe.name}</div>
      <div className="imgCardDeck">
        <img src={heroe.img} alt={heroe.name} />
      </div>
      <div className={inHand ? 'attack' : 'forIaHand'}>
        <span className="forIaHand">
          <img src={sword} alt="sword icons" /> {heroe.atk}
        </span>
      </div>
      <div className={inHand ? 'healthPoints' : 'forIaHand'}>
        <span className="forIaHand">
          <img src={heart} alt="heart icons" /> {heroe.hp}
        </span>
      </div>
    </div>
  );
};

export default CardInBoard;
