import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DeckContext } from '../Contexts/DeckContextProvider';
import CardOfDeckBoard from './CardOfDeckBoard';
import CardOfDeckBoardIa from './CardOfDeckBoardIa';
import Board from './Board';
import BoardIa from './BoardIa';
import '../Style/DeckBoard.css';
import HiddenCards from './hiddenCards';
import Graveyard from './Graveyard';
import youwin from '../Pictures/youwin.jpg';
import youloose from '../Pictures/youloose.jpg';
import equalityGame from '../Pictures/equality.jpg';

function DeckBoard() {
  const {
    deck,
    deckIa,
    createIaDeck,
    boardPlayer,
    boardIa,
    handToBoard,
    graveyard,
    enchainement,
    restart,
    isEndGame,
    win,
    loose,
    equality,
  } = useContext(DeckContext);

  const history = useHistory();
  useEffect(() => {
    createIaDeck();
  }, []); // eslint-disable-line

  const buttonQuit = () => {
    restart();
    history.push('/');
  };

  return (
    <div>
      <div
        className={
          isEndGame ? 'endGameContainer' : 'endGameContainerDisplaynone'
        }
      >
        <div className={win ? 'win' : 'winDisplaynone'}>
          <div>
            <img classname="imgEndGame" src={youwin} alt="You win" />
          </div>
        </div>
        <div className={loose ? 'loose' : 'LooseDisplaynone'}>
          <div>
            <img classname="imgEndGame" src={youloose} alt="You loose" />
          </div>
        </div>
        <div className={equality ? 'equality' : 'EqualityDisplaynone'}>
          <div>
            <img classname="imgEndGame" src={equalityGame} alt="Equality" />
          </div>
        </div>
        <div className="divButtonQuit">
          <button className="buttonQuit" type="button" onClick={buttonQuit}>
            Quit
          </button>
        </div>
      </div>
      <div className={isEndGame ? 'deckBoardDisplayNone' : 'deckBoard'}>
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
            <p>Graveyard</p>
            <Graveyard heroes={graveyard} />
          </div>
          <div className="GameButtonsContainer">
            <button
              className="buttonGameEndTurn"
              type="button"
              onClick={enchainement}
            >
              End turn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeckBoard;
