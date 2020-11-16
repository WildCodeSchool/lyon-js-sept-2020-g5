import { createContext } from 'react';

const DeckContext = createContext({
  deck: [],
  setDeck: () => {},
  addToDeck: () => {},
  deckIa: [],
  setDeckIa: () => {},
  readyForFight: '',
  setReadyForFight: () => {},
});

export default DeckContext;
