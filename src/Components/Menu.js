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
        <NavLink onClick={close} activeClassName="current" to="/Games">
          Games
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/Options">
          Options
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/About">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/Contact Us">
          Contact Us
        </NavLink>
      </li>
    </ul>
  </div>
);
