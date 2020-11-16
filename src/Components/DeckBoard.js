import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DeckContext } from '../Contexts/DeckContextProvider';
import { OptionsContext } from '../Contexts/OptionsContextProvider';
import CardOfDeckBoard from './CardOfDeckBoard';
import CardOfDeckBoardIa from './CardOfDeckBoardIa';
import Board from './Board';
import BoardIa from './BoardIa';
import '../Style/DeckBoard.css';
import HiddenCards from './hiddenCards';
import Graveyard from './Graveyard';

function DeckBoard() {
  const {
    deck,
    deckIa,
    createIaDeck,
    boardPlayer,
    boardIa,
    handToBoard,
    endTurn,
    scorePlayer,
    scoreIa,
    graveyard,
    handIaToBoardIa,
  } = useContext(DeckContext);

  const { pseudo } = useContext(OptionsContext);

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
        <div className="containerHandIa">
          <div className="iaHand">
            {deckIa
              .filter((heroe) => heroe.position === 'handIA')
              .map((heroe) => (
                <CardOfDeckBoardIa key={heroe.name} heroe={heroe} />
              ))}
          </div>
          <div className="hiddenCardIa">
            <HiddenCards heroes={deckIa} />
          </div>
        </div>

        <div className="boardContainer">
          <div className="boardIa" />
          <BoardIa heroes={boardIa} />
          <div className="boarPlayer" />
          <Board heroes={boardPlayer} />
        </div>
        <div className="containerHandPlayer">
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
          </div>
          <div className="hiddenCardPlayer1">
            <HiddenCards heroes={deck} />
          </div>
        </div>
      </div>

      <div className="sideContainer">
        <div className="divButtonQuit">
          <button className="buttonQuit" type="button" onClick={buttonQuit}>
            Quit
          </button>
        </div>
        <div className="graveyard">
          Graveyard
          <Graveyard heroes={graveyard} />
        </div>

        <div className="divButtonEndTurn">
          <button
            className="buttonEndTurn"
            type="button"
            onClick={handIaToBoardIa}
          >
            Ia Turn
          </button>
          <button className="buttonEndTurn" type="button" onClick={endTurn}>
            End turn
          </button>
          <div>
            <br />
            <p>Score de l'IA : {scoreIa}</p>
            <br />
            <p>
              Score de {pseudo} : {scorePlayer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeckBoard;
