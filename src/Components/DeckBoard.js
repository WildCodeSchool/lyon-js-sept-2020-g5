import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

  const history = useHistory();

  useEffect(() => {
    createIaDeck();
  }, []);

  const buttonQuit = () => {
    history.push('/');
  };

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
        <div className="divButtonQuit">
          <button className="buttonQuit" type="button" onClick={buttonQuit}>
            Quit
          </button>
        </div>
        <div className="graveyard">Graveyard</div>
      </div>
    </div>
  );
}

export default DeckBoard;
