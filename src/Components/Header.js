import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';

const Header = () => {
  return (
    <header>
      <p>Logo</p>
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
            <Link to="/aboutUs">About us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
