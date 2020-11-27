import React, { useContext } from 'react';
import '../Style/Options.css';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { OptionsContext } from '../Contexts/OptionsContextProvider';

function Options() {
  const { isMute, setIsMute, pseudo, setPseudo } = useContext(OptionsContext);

  const handleOnOffClick = () => {
    setIsMute(!isMute);
  };

  const handleChangeInput = (e) => {
    setPseudo(e.target.value);
  };

  const history = useHistory();

  const handleBackHome = () => {
    history.push('/');
  };

  return (
    <div className="options-body">
      <h1 className="options-title">Options</h1>
      <div className="buttonsContainer">
        <input
          placeholder="pseudo"
          type="text"
          className="options-btn"
          value={pseudo}
          onChange={(e) => handleChangeInput(e)}
        />
        <button
          type="button"
          className="options-btn mute"
          onClick={handleOnOffClick}
        >
          {' '}
          <FiPower className="fi-icons" />
          {isMute ? 'Sound OFF' : 'Sound ON'}
        </button>

        <button
          onClick={handleBackHome}
          type="button"
          className="options-btn backHome"
        >
          Back Home
        </button>
      </div>
    </div>
  );
}

export default Options;
