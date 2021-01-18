import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  getOtherPlayerDeck,
  getOtherPlayerHandCards,
  getPlayerBoardCards,
  getPlayerDeck,
  getPlayerHandCards,
  getIsFigthing,
  otherPlayerHasWon,
  playerHasWon,
  putPlayerCardInBoard,
  getGraveyardCards,
  putOtherPlayerCardInBoard,
  startIABoardAttack,
  resetGame,
} from '../Redux/gameSlice';

function DeckBoard() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    {
      putPlayerCardInBoard,
      putOtherPlayerCardInBoard,
      startIABoardAttack,
      resetGame,
    },
    dispatch
  );
  const deckIa = useSelector(getOtherPlayerDeck);
  const deck = useSelector(getPlayerDeck);
  const otherPlayerHandCards = useSelector(getOtherPlayerHandCards);
  const playerHandCards = useSelector(getPlayerHandCards);
  const playerWon = useSelector(playerHasWon);
  const otherPlayerWon = useSelector(otherPlayerHasWon);
  const draw = useSelector(equality);
  const isFighting = useSelector(getIsFigthing);
  const otherPlayerBoardCards = useSelector(getOtherPlayerBoardCards);
  const playerBoardCards = useSelector(getPlayerBoardCards);
  const graveyardCards = useSelector(getGraveyardCards);

  const history = useHistory();

  const handleQuitButtonClick = () => {
    actions.resetGame();
    history.push('/');
  };

  const handleTurnEnd = () => {
    if (otherPlayerHandCards.length)
      actions.putOtherPlayerCardInBoard(otherPlayerHandCards);
    actions.startIABoardAttack();
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
              onClick={handleQuitButtonClick}
            >
              Quit
            </button>
          </div>
        </div>
      )}

      <div className={!isFighting ? 'deckBoardDisplayNone' : 'deckBoard'}>
        <div className="mainContainer">
          <div className="containerHandIa">
            <div className="iaHand">
              {otherPlayerHandCards.map((heroe) => (
                <CardOfDeckBoardIa key={heroe.id} heroe={heroe} />
              ))}
            </div>
            <div className="hiddenCardIa">
              <HiddenCards heroes={deckIa.slice(0, 5)} />
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
              {playerHandCards.map((heroe) => (
                <CardOfDeckBoard
                  key={heroe.id}
                  heroe={heroe}
                  handToBoard={actions.putPlayerCardInBoard}
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
