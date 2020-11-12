import { createContext } from 'react';

const DeckContext = createContext({
  deck: [],
  setDeck: () => {},
  addToDeck: () => {},
});

export default DeckContext;
