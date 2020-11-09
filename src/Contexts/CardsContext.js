import { createContext } from 'react';

const CardsContext = createContext({
  cards: [],
  setCards: () => {},
});

export default CardsContext;
