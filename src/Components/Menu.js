import React from 'react';
import { NavLink } from 'react-router-dom';
import './indexBurger.css';

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink onClick={close} activeClassName="current" to="/game">
          Games
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/options">
          Options
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/hallofheroes">
          Hall of heroes
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/aboutus">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/contactus">
          Contact Us
        </NavLink>
      </li>
    </ul>
  </div>
);
