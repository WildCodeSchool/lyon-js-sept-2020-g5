import React from 'react';
import '../Style/Rules.css';

function RulesComponents(props) {
  const { image, alt, nameOfRule, textRule } = props;
  return (
    <div className="blockRules">
      <div>
        <img src={image} alt={alt} />
      </div>
      <div className="rulesDetails">
        <h3>{nameOfRule}</h3>
        <p>{textRule}</p>
      </div>
    </div>
  );
}

export default RulesComponents;
