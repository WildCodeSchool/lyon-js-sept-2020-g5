import React from 'react';
import '../Style/AboutUs.css';
import RidiculeRemi from '../Pictures/RidiculeRemi.png';
import Fat from '../Pictures/Fat.png';
import Casserole from '../Pictures/Casserole.png';
import skull from '../Pictures/skull.png';
import Tick from '../Pictures/Tick.jpg';

import AboutUsComponents from './AboutUsComponents';

function AboutUs() {
  return (
    <div className="WilderContainer">
      <AboutUsComponents
        image={skull}
        alt="image showing the maximum total power."
        nameOfWilder="Eddy"
        wilderQuote="Je peux pas commit, y a ESlint qui block c'est chiant.."
      />
      <AboutUsComponents
        image={Tick}
        alt="."
        nameOfWilder="Julien"
        wilderQuote="Putain mon pc a encore Freeze !"
      />
      <AboutUsComponents
        image={RidiculeRemi}
        alt="."
        nameOfWilder="Remi"
        wilderQuote="BURGER MENU LES GARS !!"
      />
      <AboutUsComponents
        image={Fat}
        alt="."
        nameOfWilder="Clement"
        wilderQuote="Wild Clash, je regarde pour le logo, on va mettre W.C, euh non j'ai rien dis les gars!"
      />
      <AboutUsComponents
        image={Casserole}
        alt="."
        nameOfWilder="Cedric"
        textRule=""
      />
    </div>
  );
}
export default AboutUs;
