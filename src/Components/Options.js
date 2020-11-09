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

  const changeThePseudo = (e) => {
    e.preventDefault();
    const newPseudo = e.target.value;
    setPseudo(newPseudo);
    window.alert(`Bienvenue ${pseudo}`);
  };

  /*   handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name) {
      this.props.onSubmit(this.state.name);
    } else {
      this.setState({
        error: 'Please provide a name',
      });
    }
  }; */

  return (
    <div className="options-body">
      <h1 className="options-title">Options</h1>
      <div className="buttonsContainer">
        <form onSubmit={changeThePseudo}>
          <label htmlFor="pseudo">
            Pseudo :
            <input
              placeholder="pseudo"
              type="text"
              className="options-btn pseudos"
              value={pseudo}
              id="pseudo"
              name="pseudo"
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
          <button type="submit">Save</button>
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
