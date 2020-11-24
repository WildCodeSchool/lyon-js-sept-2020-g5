import React, { createContext, useContext } from 'react';
import _ from 'lodash';
import { CardsContext } from './CardsContextProvider';
import { OptionsContext } from './OptionsContextProvider';
import useAwaitableState from '../Hooks/useAwaitableState';

export const DeckContext = createContext();

const DeckContextProvider = ({ children }) => {
  const [deck, setDeck] = useAwaitableState([], 'deckPlayer');
  const [deckIa, setDeckIa] = useAwaitableState([], 'deckIA');
  const [boardPlayer, setBoardPlayer] = useAwaitableState([], 'boardPlayer');
  const [boardIa, setBoardIa, boardIaRef] = useAwaitableState([], 'boardIa');
  const [scorePlayer, setScorePlayer] = useAwaitableState(0, 'scorePlayer');
  const [scoreIa, setScoreIa] = useAwaitableState(0, 'scoreIa');
  const [graveyard, setGraveyard] = useAwaitableState([], 'graveyard');
  const [endgame] = useAwaitableState(undefined, 'endGame');
  const { cards, setNewGame, newGame } = useContext(CardsContext);
  const { maxPower } = useContext(OptionsContext);

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
    console.log('debut handIaToBoardIa');
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
    console.log('debut handIaToBoardIa');
    return Promise.all(changes);
  }

  const endGameVerify = async () => {
    const changes = [];
    console.log('Debut FONCTION ENDGAMEVERIFY');
    console.log(`LE DECK : ${deck.length}`);
    console.log(`LE DECK IA: ${deckIa.length} `);
    console.log(`LE Board IA : ${boardIa.length}`);
    console.log(`LE Board PLAYER: ${boardPlayer.length} `);
    if (
      deck.length === 0 &&
      deckIa.length === 0 &&
      boardIa.length === 0 &&
      boardPlayer.length === 0
    ) {
      window.alert('egalité');
      changes.push(setNewGame(!newGame));
    } else if (deck.length === 0 && boardPlayer.length === 0) {
      window.alert('lose');
      changes.push(setNewGame(!newGame));
    } else if (deckIa.length === 0 && boardIa.length === 0) {
      window.alert('win');
      changes.push(setNewGame(!newGame));
    }
    console.log('fin fonction endgame VERIFY');
    return Promise.all(changes);
  };

  function attackCard() {
    console.log('debut fonction attack');
    const changes = [];

    console.log('wow so empty : ', boardIa);
    console.log('wow not not empty : ', boardIaRef.current);
    debugger; // eslint-disable-line
    const iaCardInBoard = boardIaRef.current.slice();
    const playerCardInBoard = boardPlayer.slice();
    const graveyardInContext = graveyard.slice();

    // mise a jour des points de vie des cartes
    while (
      (playerCardInBoard[0].hp > iaCardInBoard[0].hp &&
        iaCardInBoard[0].hp >= 0) ||
      (playerCardInBoard[0].hp < iaCardInBoard[0].hp &&
        playerCardInBoard[0].hp >= 0)
    ) {
      iaCardInBoard[0].hp -= boardPlayer[0].atk;
      playerCardInBoard[0].hp -= iaCardInBoard[0].atk;

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
    console.log('fin fonction attack');
    return Promise.all(changes);
  }

  const endTurn = () => {
    attackCard();
    endGameVerify();
  };

  const enchainement = async () => {
    await handIaToBoardIa();
    console.log("état de la board de l'IA dans l'enchainement", boardIa);
    await attackCard();
    await endGameVerify();
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
        endTurn,
        graveyard,
        setGraveyard,
        handIaToBoardIa,
        scorePlayer,
        scoreIa,
        endGameVerify,
        endgame,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};
export default DeckContextProvider;
