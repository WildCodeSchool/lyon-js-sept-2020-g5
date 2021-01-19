import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Howl } from 'howler';
import '../Style/Home.css';
import Punch from '../Audio/Punch.wav';
import Go from '../Audio/go.wav';
import { getOptions } from '../Redux/optionsSlice';
import { resetGame } from '../Redux/gameSlice';

const audioClips = new Howl({
  src: [Punch],
});

const audioClips2 = new Howl({
  src: [Go],
});

const Home = (props) => {
  const dispatch = useDispatch();
  const reset = () => dispatch(resetGame());
  const isMute = useSelector(getOptions).mute;

  const handleNewGameClick = () => {
    reset();
    props.history.push('/game');
    if (!isMute) {
      audioClips2.play();
    }
  };

  const handleRulesClick = () => {
    props.history.push('/rules');
    if (!isMute) {
      audioClips.play();
    }
  };

  const handleOptionsClick = () => {
    props.history.push('/options');
    if (!isMute) {
      audioClips.play();
    }
  };

  const handleAboutClick = () => {
    props.history.push('/aboutUs');
    if (!isMute) {
      audioClips.play();
    }
  };

  return (
    <div className="body-home-container">
      <div className="btn-container1">
        <button
          type="button"
          className="btn-new-game"
          onClick={handleNewGameClick}
        >
          New Game
        </button>
      </div>
      <div className="btn-container2">
        <button type="button" className="btn-rules" onClick={handleRulesClick}>
          Rules
        </button>
        <button
          type="button"
          className="btn-options"
          onClick={handleOptionsClick}
        >
          Options
        </button>
        <button type="button" className="btn-about" onClick={handleAboutClick}>
          About us
        </button>
      </div>
    </div>
  );
};

export default Home;
