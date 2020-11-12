import React, { createContext, useState } from 'react';

export const OptionsContext = createContext();

const OptionContextProvider = ({ children }) => {
  const [isMute, setIsMute] = useState(false);
  const [pseudo, setPseudo] = useState('JS lover player');
  const [maxPower, setMaxPower] = useState(500);
  return (
    <OptionsContext.Provider
      value={{ isMute, setIsMute, pseudo, setPseudo, maxPower, setMaxPower }}
    >
      {children}
    </OptionsContext.Provider>
  );
};
export default OptionContextProvider;
