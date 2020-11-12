import React, { useContext, useEffect } from 'react';
import { DeckContext } from '../Contexts/DeckContextProvider';
import CardOfDeckBoard from './CardOfDeckBoard';
import Board from './Board';
import '../Style/DeckBoard.css';
import '../Style/CardOfDeckBoard.css';

function DeckBoard() {
  const {
    deck,
    deckIa,
    createIaDeck,
    boardPlayer,
    boardIa,
    handToBoard,
  } = useContext(DeckContext);

  useEffect(() => {
    createIaDeck();
  }, []);

  return (
    <div className="deckBoard">
      <div className="mainContainer">
        <div className="iaHand">
          {deckIa
            .filter((heroe) => heroe.position === 'handIA')
            .map((heroe) => (
              <CardOfDeckBoard key={heroe.name} heroe={heroe} />
            ))}
          <div className="hiddenCardIa" />
        </div>

        <div className="boardContainer">
          <div className="boardIa" />
          <Board heroes={boardIa} />
          <div className="boarPlayer" />
          <Board heroes={boardPlayer} />
        </div>

        <div className="playerHand">
          {deck
            .filter((heroe) => heroe.position === 'hand')
            .map((heroe) => (
              <CardOfDeckBoard
                key={heroe.name}
                heroe={heroe}
                handToBoard={handToBoard}
              />
            ))}
          <div className="hiddenCardPlayer1" />
        </div>
      </div>

      <div className="sideContainer">
        <div>button quit</div>
        <div className="graveyard">Graveyard</div>
      </div>
    </div>
  );
}

export default DeckBoard;
