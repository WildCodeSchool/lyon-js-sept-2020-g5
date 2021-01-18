import React from 'react';
import '../Style/CardOfDeckBoardIa.css';
import sword from '../Pictures/icons-epee.png';
import heart from '../Pictures/icons-coeurs.png';
import { isInHand } from '../Redux/gameSlice';

const CardOfDeckBoardIa = (props) => {
  const { heroe } = props;
  const inHand = isInHand(heroe);

  return (
    <div className={inHand ? 'cardOfDeckBoardIaHand' : 'cardOfDeckBoardIa'}>
      <div className="heroName">{heroe.name}</div>
      <div className="imgCardDeck">
        <img src={heroe.img} alt={heroe.name} />
      </div>
      <div className={inHand ? 'forIaHand' : 'attack'}>
        <img src={sword} alt="sword icons" /> {heroe.atk}
      </div>
      <div className={inHand ? 'forIaHand' : 'healthPoints'}>
        <img src={heart} alt="heart icons" /> {heroe.hp}
      </div>
    </div>
  );
};

export default CardOfDeckBoardIa;
