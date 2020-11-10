import React, { useContext } from 'react';
import '../Style/Options.css';
import { FiPower } from 'react-icons/fi';
import OptionsContext from '../Contexts/OptionsContext';

function Options() {
  const { isMute, setIsMute, pseudo, setPseudo } = useContext(OptionsContext);

  const handleOnOffClick = () => {
    setIsMute(!isMute);
  };

  const handleChangeInput = (e) => {
    setPseudo(e.target.value);
  };

  return (
    <div className="options-body">
      <h1 className="options-title">Options</h1>
      <div className="buttonsContainer">
        <form>
          <label htmlFor="pseudo">
            Pseudo :
            <input
              placeholder="pseudo"
              type="text"
              className="options-btn pseudos"
              value={pseudo}
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
        </form>

        <button
          type="button"
          className="options-btn mute"
          onClick={handleOnOffClick}
        >
          {' '}
          <FiPower className="fi-icons" />
          {isMute ? 'Sound ON' : 'Sound OFF'}
        </button>

        <button type="button" className="options-btn backHome">
          Back Home
        </button>
      </div>
    </div>
  );
}

export default Options;
