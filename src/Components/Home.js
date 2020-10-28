import React from 'react';
import '../style/Home.css'

const Home = (props) => {
  console.log(props)
  
  const handleNewGameClick = () => {
    props.history.push("/game")
  }
  return (
    <div className="body-home-container">
    <div className="box">

    </div>
    <div className="btn-container1">
        <button className="btn-home" className="btn-new-game" onClick={handleNewGameClick}>New Game</button>

    </div>
    <div className="btn-container2">
        <button className="btn-home" className="btn-rules">Rules</button>
        <button className="btn-home" className="btn-options">Options</button>
        <button className="btn-home" className="btn-about">About us</button>
    </div>

    </div>
    
  );
};

export default Home;
