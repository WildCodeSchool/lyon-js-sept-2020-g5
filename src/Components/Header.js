import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';
import BurgerMenu from './Burgermenu';
import logowildClash from '../Pictures/logo-wildClash.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logowildClash} alt="logo Wild CLash" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/options">Options</Link>
          </li>
          <li>
            <Link to="/rules">Rules</Link>
          </li>
          <li>
            <Link to="/hallofheroes">Hall of heroes</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
};

export default Header;
