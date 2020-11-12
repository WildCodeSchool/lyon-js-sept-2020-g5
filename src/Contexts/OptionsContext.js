import { createContext } from 'react';

const OptionsContext = createContext({
  isMute: '',
  setIsMute: () => {},
  pseudo: '',
  setPseudo: () => {},
  maxPower: '',
  setMaxPower: () => {},
});

export default OptionsContext;
