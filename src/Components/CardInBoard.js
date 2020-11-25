import React from 'react';
import '../Style/CardInBoard.css';
import sword from '../Pictures/icons-epee.png';
import heart from '../Pictures/icons-coeurs.png';

const CardInBoard = (props) => {
  const { heroe, handToBoard, index } = props;

  return (
    <div
      className={
        heroe.position === 'hand' ? 'CardInBoard' : 'CardInBoard IaHand'
      }
      onClick={() => handToBoard(heroe.name)}
      role="button"
      tabIndex={index}
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

export default CardInBoard;
