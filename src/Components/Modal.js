import React from 'react';
import '../Style/Modal.css';

const Modals = (showModal, endGame, pseudo) => {
  let endGameTitle = '';
  let enGameImage = '';
  if (endGame === 'equality') {
    endGameTitle = 'Fatali ... equality !';
    enGameImage = 'https://media.giphy.com/media/6w6TEAATeBik8/giphy.gif';
  } else if (endGame === 'lose') {
    endGameTitle = `Sucker ${pseudo}, looks like you're a PHP player, you're a noob!`;
    enGameImage = 'https://media.giphy.com/media/mcH0upG1TeEak/giphy.gif';
  } else if (endGame === 'win') {
    endGameTitle = `You've goat it ${pseudo} !`;
    enGameImage = 'https://media.giphy.com/media/3hvmlYNsOTFWE/giphy.gif';
  }
  return (
    <div className="modal">
      <section id="enGame-settings" className="modal-main">
        <h2>{endGameTitle}</h2>
        <div className="endGameImg-Container">
          <img src={enGameImage} alt={endGame} />
        </div>
        <div className="button-modal-container">
          <button type="button" className="button-config">
            <a className="return-home" href="/">
              Return Home
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modals;
