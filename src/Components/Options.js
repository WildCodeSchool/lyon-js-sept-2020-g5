import React, { Component } from 'react';
import '../Style/Options.css';
import { FiPower } from 'react-icons/fi';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = { isSoundOn: true };
  }

  handleOnOffClick = () => {
    this.setState((state) => ({
      isSoundOn: !state.isSoundOn,
    }));
  };

  handleBackHomeClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { isSoundOn } = this.state;

    return (
      <div className="options-body">
        <h1 className="options-title">Options</h1>
        <div className="buttonsContainer">
          <input
            placeholder="pseudo"
            type="text"
            className="options-btn pseudos"
          />

          <button
            type="button"
            className="options-btn mute"
            onClick={this.handleOnOffClick}
          >
            {' '}
            <FiPower className="fi-icons" />
            {isSoundOn ? 'Sound ON' : 'Sound OFF'}
          </button>

          <button
            type="button"
            className="options-btn backHome"
            onClick={this.handleBackHomeClick}
          >
            Back Home
          </button>
        </div>
      </div>
    );
  }
}

export default Options;
