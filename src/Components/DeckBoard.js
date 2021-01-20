import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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

import {
  equality,
  getOtherPlayerBoardCards,
  getOtherPlayerHandCards,
  getPlayerBoardCards,
  getPlayerHandCards,
  getIsFigthing,
  otherPlayerHasWon,
  playerHasWon,
  putPlayerCardInBoard,
  getGraveyardCards,
  startIABoardAttack,
  resetGame,
  isOtherPlayerTurn,
  putRandomOtherPlayerCardOnBoard,
} from '../Redux/gameSlice';

function DeckBoard() {
  const dispatch = useDispatch();
  const otherPlayerHandCards = useSelector(getOtherPlayerHandCards);
  const playerHandCards = useSelector(getPlayerHandCards);
  const playerWon = useSelector(playerHasWon);
  const otherPlayerWon = useSelector(otherPlayerHasWon);
  const draw = useSelector(equality);
  const isFighting = useSelector(getIsFigthing);
  const otherPlayerBoardCards = useSelector(getOtherPlayerBoardCards);
  const playerBoardCards = useSelector(getPlayerBoardCards);
  const graveyardCards = useSelector(getGraveyardCards);
  const otherPlayerTurn = useSelector(isOtherPlayerTurn);

  const history = useHistory();

  const handleQuitButtonClick = () => {
    dispatch(resetGame());
    history.push('/');
  };

  const handleNewGameButtonClick = () => {
    dispatch(resetGame());
    history.push('/game');
  };

  const handleTurnEnd = () => {
    if (otherPlayerHandCards.length)
      dispatch(putRandomOtherPlayerCardOnBoard());
    dispatch(startIABoardAttack());
  };

  const handlePlayerHandCardClick = (card) => {
    dispatch(putPlayerCardInBoard(card));
  };

  return (
    <div>
      {(playerWon || draw || otherPlayerWon) && (
        <div className="endGameContainer">
          <div className={playerWon ? 'win' : 'winDisplaynone'}>
            <div>
              <img className="imgEndGame" src={youwin} alt="You win" />
            </div>
          </div>
          <div className={otherPlayerWon ? 'loose' : 'LooseDisplaynone'}>
            <div>
              <img className="imgEndGame" src={youloose} alt="You loose" />
            </div>
          </div>
          <div className={draw ? 'equality' : 'EqualityDisplaynone'}>
            <div>
              <img className="imgEndGame" src={equalityGame} alt="Equality" />
            </div>
          </div>
          <div className="divButtonQuit">
            <button
              className="buttonQuit"
              type="button"
              onClick={handleNewGameButtonClick}
            >
              New Game
            </button>
          </div>
        </div>
      )}

      <div className={!isFighting ? 'deckBoardDisplayNone' : 'deckBoard'}>
        <div className="mainContainer">
          <div className="containerHandIa">
            <div className="iaHand">
              {otherPlayerHandCards.slice(0, 5).map((heroe) => (
                <CardOfDeckBoardIa key={heroe.id} heroe={heroe} />
              ))}
            </div>
            <div className="hiddenCardIa">
              <HiddenCards heroes={otherPlayerHandCards.slice(5)} />
            </div>
          </div>

          <div className="boardContainer">
            <div className="boardIa" />
            <BoardIa heroes={otherPlayerBoardCards} />
            <div className="boarPlayer" />
            <Board heroes={playerBoardCards} />
          </div>
          <div className="containerHandPlayer">
            <div className="playerHand">
              {playerHandCards.slice(0, 5).map((heroe) => (
                <CardOfDeckBoard
                  key={heroe.id}
                  heroe={heroe}
                  handToBoard={handlePlayerHandCardClick}
                />
              ))}
            </div>
            <div className="hiddenCardPlayer1">
              <HiddenCards heroes={playerHandCards.slice(5)} />
            </div>
          </div>
        </div>

        <div className="sideContainer">
          <div className="divButtonQuit">
            <button
              className="buttonQuit"
              type="button"
              onClick={handleQuitButtonClick}
            >
              Quit
            </button>
          </div>
          <div className="graveyard">
            <p>Graveyard</p>
            <Graveyard heroes={graveyardCards} />
          </div>
          <div className="GameButtonsContainer">
            <button
              disabled={otherPlayerTurn}
              className="buttonGameEndTurn"
              type="button"
              onClick={handleTurnEnd}
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
