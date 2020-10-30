import React from 'react';
import '../Style/AboutUs.css';

function AboutUsComponents(props) {
  const { image, alt, nameOfWilder, wilderQuote } = props;
  return (
    <div className="blockAboutUs">
      <div>
        <img src={image} alt={alt} />
      </div>
      <div className="AboutUsDetails">
        <h3>{nameOfWilder}</h3>
        <p>{wilderQuote}</p>
      </div>
    </div>
  );
}

export default AboutUsComponents;
