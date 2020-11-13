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
  const { cards } = useContext(CardsContext);
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
    for (let j = 0; j < deckToBoard.length; j += 1) {
      if (deckToBoard[j].name === heroeName) {
        cardChosen.push(deckToBoard[j]);
      }
    }
    setBoardPlayer(cardChosen);
  };

  const handIaToBoardIa = () => {
    const shuffleDeckIaCards = _.shuffle(deckIa);
    const cardIA = [];
    if (shuffleDeckIaCards.length !== 0) {
      cardIA.push({ ...shuffleDeckIaCards[0], position: 'Board' });
      shuffleDeckIaCards.shift();
    } else {
      console.log("plus de carte dispo pour l'ia");
    }
    setBoardIa(cardIA);
    setDeckIa(shuffleDeckIaCards);
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
        handIaToBoardIa,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};
export default DeckContextProvider;
