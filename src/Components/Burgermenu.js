import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Popup from 'reactjs-popup';

import BurgerIcon from './BurgerIcon';

import Menu from './Menu';
import './indexBurger.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  marginTop: '40px',
};
const contentStyle = {
  background: 'rgba(255,255,255,0)',
  width: '80%',
  border: 'none',
};
const Home = () => (
  <div>
    <h2>Home </h2>
  </div>
);

const Game = () => (
  <div>
    <h2>Game </h2>
  </div>
);

const Rules = () => (
  <div>
    <h2>rules</h2>
  </div>
);
const Options = () => (
  <div>
    <h2>Options</h2>
  </div>
);

const AboutUs = () => (
  <div>
    <h2>AboutUs</h2>
  </div>
);
const ContactUs = () => (
  <div>
    <h2>ContactUs</h2>
  </div>
);

const BurgerMenu = () => (
  <div style={styles}>
    <Router>
      <div>
        <Popup
          modal
          overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={(open) => <BurgerIcon open={open} />}
        >
          {(close) => <Menu close={close} />}
        </Popup>

        <hr />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game" component={Game} />
        <Route path="/rules" component={Rules} />
        <Route path="/options" component={Options} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/contactUs" component={ContactUs} />
      </div>
    </Router>
  </div>
);

export default BurgerMenu;
