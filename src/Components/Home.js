import React from 'react';
import '../style/Home.css'

const Home = (props) => {
  console.log(props)
  
  const handleNewGameClick = () => {
    props.history.push("/game")
  }

  const handleRulesClick = () => {
    props.history.push("/rules")
  }

  const handleOptionsClick = () => {
    props.history.push("/options")
  }

  const handleAboutClick = () => {
    props.history.push("/aboutUs")
  }
  return (
    <div className="body-home-container">

      <div className="btn-container1">
          <button className="btn-home" className="btn-new-game" onClick={handleNewGameClick}>New Game</button>

      </div>
      <div className="btn-container2">
          <button className="btn-home" className="btn-rules" onClick={handleRulesClick}>Rules</button>
          <button className="btn-home" className="btn-options" onClick={handleOptionsClick}>Options</button>
          <button className="btn-home" className="btn-about" onClick={handleAboutClick}>About us</button>
      </div>

    </div>
    
  );
};

export default Home;
