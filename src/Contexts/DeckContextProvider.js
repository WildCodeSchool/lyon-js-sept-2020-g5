import React, { createContext, useContext, useState } from 'react';
import _ from 'lodash';
import { CardsContext } from './CardsContextProvider';
import { OptionsContext } from './OptionsContextProvider';
import useAwaitableState from '../Hooks/useAwaitableState';

export const DeckContext = createContext();

const DeckContextProvider = ({ children }) => {
  const [deck, setDeck, deckRef] = useAwaitableState([], 'deckPlayer');
  const [deckIa, setDeckIa, deckIaRef] = useAwaitableState([], 'deckIA');
  const [boardPlayer, setBoardPlayer, boardPlayerRef] = useAwaitableState(
    [],
    'boardPlayer'
  );
  const [boardIa, setBoardIa, boardIaRef] = useAwaitableState([], 'boardIa');
  const [scorePlayer, setScorePlayer] = useAwaitableState(0, 'scorePlayer');
  const [scoreIa, setScoreIa] = useAwaitableState(0, 'scoreIa');
  const [graveyard, setGraveyard] = useAwaitableState([], 'graveyard');
  const [endgame] = useAwaitableState(undefined, 'endGame');
  const { cards, setNewGame, newGame } = useContext(CardsContext);
  const { maxPower } = useContext(OptionsContext);
  const [readyForFight, setReadyForFight] = useState(false);

  /* creation d'ue pause pour avoir le temps de voir les cartes */
  const delay = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

  const addToDeck = (cardName) => {
    let newDeck = deck.slice();

    const totalPower = deck
      .map((card) => card.power)
      .reduce((acc, cur) => acc + cur, 0);

    if (newDeck.filter((heroe) => cardName === heroe.name).length === 0) {
      if (
        totalPower +
          cards.filter((heroe) => cardName === heroe.name)[0].power <=
        maxPower
      ) {
        newDeck.push(cards.filter((heroe) => cardName === heroe.name)[0]);
      } else {
        window.alert(
          'Be careful, your card is too powerful. Select another or start the game'
        );
      }
    } else {
      newDeck = newDeck.filter((heroe) => !cardName.includes(heroe.name));
    }
    setDeck(newDeck);
  };

  const createIaDeck = () => {
    const shuffleCards = _.shuffle(cards); // utilisation de lodash pour melanger les carte provenant de l'API
    let iaDeckPower = 0;
    const cardForIa = [];

    for (
      let i = 0;
      i < shuffleCards.length && iaDeckPower <= maxPower;
      i += 1
    ) {
      if (shuffleCards[i].power < maxPower - iaDeckPower) {
        cardForIa.push({ ...shuffleCards[i], position: 'handIA' });
        iaDeckPower += shuffleCards[i].power;
      }
    }
    setDeckIa(cardForIa);
  };

  const handToBoard = (heroeName) => {
    const deckToBoard = deck.slice();
    const cardChosen = [];

    // boucle pour ajouter la carte sur la board du player
    for (let j = 0; j < deckToBoard.length; j += 1) {
      if (deckToBoard[j].name === heroeName) {
        cardChosen.push(deckToBoard[j]);
      }
    }

    // boucle pour supprimer la carte du deck
    for (let k = 0; k < deckToBoard.length; k += 1)
      if (deckToBoard[k] === cardChosen[0]) {
        deckToBoard.splice(k, 1);
      }

    setBoardPlayer(cardChosen);
    setDeck(deckToBoard);
  };

  async function handIaToBoardIa() {
    const changes = [];
    const shuffleDeckIaCards = _.shuffle(deckIa);
    const cardIA = [];

    if (shuffleDeckIaCards.length !== 0) {
      cardIA.push({ ...shuffleDeckIaCards[0], position: 'Board' });
      shuffleDeckIaCards.shift();
      const boardiaPromise = setBoardIa(cardIA);
      boardiaPromise.then((board) => {
        console.log('board ia set', board);
      });
      changes.push(boardiaPromise);
      changes.push(setDeckIa(shuffleDeckIaCards));
    } else {
      window.alert("plus de carte dispo pour l'ia");
    }
    return Promise.all(changes);
  }

  const endGameVerify = async () => {
    const changes = [];

    if (
      deckRef.current.length === 0 &&
      deckIaRef.current.length === 0 &&
      boardIaRef.current.length === 0 &&
      boardPlayerRef.current.length === 0
    ) {
      window.alert('equality !!! ');
      changes.push(setNewGame(!newGame));
    } else if (
      deckRef.current.length === 0 &&
      boardPlayerRef.current.length === 0
    ) {
      window.alert('You lose !!!!');
      changes.push(setNewGame(!newGame));
    } else if (
      deckIaRef.current.length === 0 &&
      boardIaRef.current.length === 0
    ) {
      window.alert('Congratulation !! You win');
      changes.push(setNewGame(!newGame));
    }

    return Promise.all(changes);
  };

  async function attackCard() {
    const changes = [];

    const iaCardInBoard = boardIaRef.current.slice();
    const playerCardInBoard = boardPlayerRef.current.slice();
    const graveyardInContext = graveyard.slice();

    // pause pour voir le temps de voir les cartes
    await delay(2000);
    // mise a jour des points de vie des cartes
    while (
      (playerCardInBoard[0].hp > iaCardInBoard[0].hp &&
        iaCardInBoard[0].hp > 0) ||
      (playerCardInBoard[0].hp < iaCardInBoard[0].hp &&
        playerCardInBoard[0].hp > 0) ||
      playerCardInBoard[0].hp === iaCardInBoard[0].hp
    ) {
      playerCardInBoard[0].hp -= iaCardInBoard[0].atk;

      iaCardInBoard[0].hp -= boardPlayer[0].atk;

      // si Pv joueur > PV Ia
      // le joueur a battu une carte de l'IA

      if (
        playerCardInBoard[0].hp > iaCardInBoard[0].hp &&
        iaCardInBoard[0].hp <= 0
      ) {
        changes.push(setScorePlayer(scorePlayer + 1));
        changes.push(setBoardPlayer(playerCardInBoard));
        changes.push(setBoardIa(iaCardInBoard));
      }

      // l'IA a battu une carte du joueur
      // si Pv joueur < PV Ia
      if (
        playerCardInBoard[0].hp < iaCardInBoard[0].hp &&
        playerCardInBoard[0].hp <= 0
      ) {
        changes.push(setScoreIa(scoreIa + 1));
        changes.push(setBoardPlayer(playerCardInBoard));
        changes.push(setBoardIa(iaCardInBoard));
      }

      // envoi de la carte du joueur au cimetiere si PV < = 0
      if (playerCardInBoard[0].hp <= 0) {
        graveyardInContext.unshift(boardPlayer[0]);
        setGraveyard(graveyardInContext);
        setBoardPlayer([]);
      }

      // remise a 0 de la board de l'IA si PV de l'IA < = 0
      if (iaCardInBoard[0].hp <= 0) {
        setBoardIa([]);
      }
    }

    return Promise.all(changes);
  }

  const enchainement = async () => {
    if (boardIaRef.current.length > 0) {
      await attackCard();
      await endGameVerify();
    } else {
      await handIaToBoardIa();
      await attackCard();
      await endGameVerify();
    }
  };

  const restart = () => {
    setBoardIa([]);
    setBoardPlayer([]);
    setDeck([]);
    setGraveyard([]);
    setNewGame(!newGame);
  };

  return (
    <DeckContext.Provider
      value={{
        enchainement,
        deck,
        setDeck,
        deckIa,
        setDeckIa,
        addToDeck,
        createIaDeck,
        boardPlayer,
        setBoardPlayer,
        boardIa,
        setBoardIa,
        handToBoard,
        graveyard,
        endGameVerify,
        endgame,
        readyForFight,
        setReadyForFight,
        restart,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};
export default DeckContextProvider;
