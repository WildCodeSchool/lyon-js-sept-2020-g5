import { createContext } from 'react';
import hallWaiting from '../Pictures/hallWaiting.png';

const CardsContext = createContext({
  cards: [
    {
      alignment: 'XXXX',
      id: 'XXXX',
      name: 'Chargement en cours',
      img: hallWaiting,
      atk: 'XXXX',
      hp: 'XXXX',
      power: 'XXXX',
    },
  ],
  setCards: () => {},
});

export default CardsContext;
