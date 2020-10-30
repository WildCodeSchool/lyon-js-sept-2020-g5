import React from 'react';
import '../Style/Rules.css';
import boardgame1 from '../Picture/boardgame1.png';
import playerboard from '../Picture/playerboard.png';

import RulesComponents from './RulesComponents';

function Rules() {
  return (
    <div className="RulesContainer">
      <RulesComponents
        image={boardgame1}
        alt="image showing the maximum total power."
        nameOfRule="1 step - Deck choice"
        textRule="click on the cards to add the hero to your deck."
      />
      <RulesComponents
        image="http://placekitten.com/372/330"
        alt="."
        nameOfRule="2 step - Deck choice"
        textRule="Filled up to the maximum power allowed for your deck."
      />
      <RulesComponents
        image={playerboard}
        alt="."
        nameOfRule="Step 1 - your game board"
        textRule="On your game board you can see the cards you can use for your fight."
      />
      <RulesComponents
        image="http://placekitten.com/372/330"
        alt="."
        nameOfRule="Step 2 - your game board - your turn"
        textRule="Among your visible cards, select ('click') a card to send it to the battle board."
      />
      <RulesComponents
        image="http://placekitten.com/372/330"
        alt="."
        nameOfRule="Step 3 - your game board - your turn"
        textRule="The card you have selected is on the battle board.You can exchange it with another card before finishing your turn."
      />
      <RulesComponents
        image="http://placekitten.com/372/330"
        alt="."
        nameOfRule="Step 3 - your game board - your turn"
        textRule="it's time to attack! the card you have selected is on the battle board. click or press `FIGHT` for the opponent to play."
      />
      <RulesComponents
        image="http://placekitten.com/372/330"
        alt="."
        nameOfRule="Step 1 - Board pponent - turn"
        textRule="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />
      <RulesComponents
        image="http://placekitten.com/372/330"
        alt="."
        nameOfRule="Step 1  - Board, Fight phase"
        textRule="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />
      <RulesComponents
        image="http://placekitten.com/372/330"
        alt="."
        nameOfRule="Graveyard"
        textRule="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />
      <RulesComponents
        image="http://placekitten.com/372/330"
        alt="."
        nameOfRule="How to win"
        textRule="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />
    </div>
  );
}
export default Rules;
