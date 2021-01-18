import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Style/Options.css';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {
  getOptions,
  setMaxPower,
  setPlayerName,
  toggleMute,
} from '../Redux/optionsSlice';

function Options() {
  const options = useSelector(getOptions);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="options-body">
      <h1 className="options-title">Options</h1>
      <div className="buttonsContainer">
        <input
          placeholder="Player name"
          type="text"
          className="options-btn"
          title="Player name"
          value={options.playerName}
          onChange={(e) => dispatch(setPlayerName(e.target.value))}
        />
        <input
          placeholder="Maximum deck power"
          type="number"
          min="100"
          max="1000"
          step="50"
          title="Maximum deck power"
          className="options-btn"
          value={options.maxPower}
          onChange={(e) => dispatch(setMaxPower(parseInt(e.target.value, 10)))}
        />
        <button
          type="button"
          className="options-btn mute"
          onClick={() => dispatch(toggleMute())}
        >
          {' '}
          <FiPower className="fi-icons" />
          {options.mute ? 'Sound OFF' : 'Sound ON'}
        </button>

        <button
          onClick={() => {
            history.push('/');
          }}
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
