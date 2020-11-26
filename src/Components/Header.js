import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';
import { Howl } from 'howler';
import BurgerMenu from './Burgermenu';
import logowildClash from '../Pictures/logo-wildClash.png';
import wildClash from '../Audio/wildClash.mp3';

const Header = () => {
  const audioClips3 = new Howl({
    src: [wildClash],
  });

  const stopTheMusic = () => {
    audioClips3.stop();
    console.log('muted ?');
  };

  return (
    <header>
      <div className="logo">
        <img src={logowildClash} alt="logo Wild CLash" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={stopTheMusic}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/options" onClick={stopTheMusic}>
              Options
            </Link>
          </li>
          <li>
            <Link to="/rules" onClick={stopTheMusic}>
              Rules
            </Link>
          </li>
          <li>
            <Link to="/hallofheroes" onClick={stopTheMusic}>
              Hall of heroes
            </Link>
          </li>
          <li>
            <Link to="/aboutus" onClick={stopTheMusic}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/contactus" onClick={stopTheMusic}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
};

export default Header;
