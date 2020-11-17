import React, { createContext, useContext, useState } from 'react';
import _ from 'lodash';
import { CardsContext } from './CardsContextProvider';
import { OptionsContext } from './OptionsContextProvider';

export const DeckContext = createContext();

const DeckContextProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);
  const [deckIa, setDeckIa] = useState([]);
  const [boardPlayer, setBoardPlayer] = useState([]);
  const [boardIa, setBoardIa] = useState([]);
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreIa, setScoreIa] = useState(0);
  const [graveyard, setGraveyard] = useState([]);
  const [showmodal, setShowModal] = useState(false);
  const [endgame, setEndGame] = useState(undefined);
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

  function handIaToBoardIa() {
    const shuffleDeckIaCards = _.shuffle(deckIa);
    const cardIA = [];

    if (shuffleDeckIaCards.length !== 0) {
      cardIA.push({ ...shuffleDeckIaCards[0], position: 'Board' });
      shuffleDeckIaCards.shift();
      setBoardIa(cardIA);
      setDeckIa(shuffleDeckIaCards);
    } else {
      window.alert("plus de carte dispo pour l'ia");
    }
  }

  const attackCard = () => {
    const iaCardInBoard = boardIa.slice();
    const playerCardInBoard = boardPlayer.slice();
    const graveyardInContext = graveyard.slice();

    // mise a jour des points de vie des cartes
    iaCardInBoard[0].hp -= boardPlayer[0].atk;
    playerCardInBoard[0].hp -= boardIa[0].atk;

    // si Pv joueur > PV Ia

    if (
      playerCardInBoard[0].hp > iaCardInBoard[0].hp &&
      iaCardInBoard[0].hp <= 0
    ) {
      setScorePlayer(scorePlayer + 1);
      setBoardPlayer(playerCardInBoard);
      setBoardIa(iaCardInBoard);
    }

    // si Pv joueur < PV Ia
    if (
      playerCardInBoard[0].hp < iaCardInBoard[0].hp &&
      playerCardInBoard[0].hp <= 0
    ) {
      setScoreIa(scoreIa + 1);
      setBoardPlayer(playerCardInBoard);
      setBoardIa(iaCardInBoard);
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
  };

  const endTurn = () => {
    attackCard();
  };

  const startNewGame = () => {
    setNewGame(!newGame);
  };

  const endGameVerify = () => {
    if (
      deck.length === 0 &&
      deckIa.length === 0 &&
      boardIa.length === 0 &&
      boardPlayer.length === 0
    ) {
      window.alert('egalité');
      setEndGame('equality');
      setShowModal(true);
    } else if (deck.length === 0 && boardPlayer.length === 0) {
      window.alert('lose');
      setEndGame('lose');
      setShowModal(true);
    } else if (deckIa.length === 0 && boardIa.length === 0) {
      window.alert('win');
      setEndGame('win');
      setShowModal(true);
    }
  };

  return (
    <DeckContext.Provider
      value={{
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
        startNewGame,
        endGameVerify,
        showmodal,
        endgame,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};
export default DeckContextProvider;
