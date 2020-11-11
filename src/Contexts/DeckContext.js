import { createContext } from 'react';

const DeckContext = createContext({
  deck: [],
  setDeck: () => {},
  addToDeck: () => {},
  deckIa: [],
  setDeckIa: () => {},
});

export default DeckContext;
