import React from 'react';
import '../Style/Rules.css';
import boardgame1 from '../Pictures/boardgame1.png';
import playerboard from '../Pictures/playerboard.png';

import RulesComponents from './RulesComponents';

function Rules() {
  return (
    <div className="RulesContainer">
      <RulesComponents
        image={boardgame1}
        alt="image showing the maximum total power."
        nameOfRule="Deck choice"
        textRule="click on the cards to add the hero to your deck."
      />
      <RulesComponents
        image={playerboard}
        alt="."
        nameOfRule="Deck choice - Max Power"
        textRule="Filled up to the maximum power allowed for your deck."
      />
      <RulesComponents
        image={playerboard}
        alt="."
        nameOfRule="Your game board - Hand"
        textRule="On your game board you can see the cards you can use for your fight."
      />
      <RulesComponents
        image={playerboard}
        alt="."
        nameOfRule="Your game board - Your turn"
        textRule="Among your visible cards, select ('click') a card to send it to the battle board."
      />
      <RulesComponents
        image={playerboard}
        alt="."
        nameOfRule="Your game board - End of your turn"
        textRule="It's time to attack! 
        The card you have selected is on the battle board. 
        Click or press `End-turn` to finish your turn."
      />
      <RulesComponents
        image={playerboard}
        alt="."
        nameOfRule="Board opponent - turn"
        textRule="It's your opponent's turn!
        He will attack you with a hero from his deck if he doesn't already have one on his board."
      />
      <RulesComponents
        image={playerboard}
        alt="."
        nameOfRule="Board, Fight phase"
        textRule="The cards are going to clash. The hit points decrease following the attacks. The red number corresponds to the attack points and the green one to the health points."
      />
      <RulesComponents
        image={playerboard}
        alt="image showing the Graveyard."
        nameOfRule="Graveyard"
        textRule="If the hero is not powerful enough or too weak after these multiple fights, he dies and goes to the graveyard ! 
        We love them 3,000....."
      />
      <RulesComponents
        image={playerboard}
        alt="."
        nameOfRule="How to win"
        textRule="You still have a hero still alive in your hand and or on your fighting board, while your opponent has none left. 
        Congratulations, you can press Win verify and you will know what a leader you are !"
      />
    </div>
  );
}
export default Rules;
