import React from 'react';
import { NavLink } from 'react-router-dom';
import './indexBurger.css';

/* const Menu = (props) => {
  const homeClick = () => {
    props.history.push('/');
  };
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink onClick={homeClick} activeClassName="current" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="current" to="/options">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="current" to="/rules">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
 */

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
