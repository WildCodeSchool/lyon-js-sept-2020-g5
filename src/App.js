import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Game from './Components/Game';
import DeckBoard from './Components/DeckBoard';
import Rules from './Components/Rules';
import Options from './Components/Options';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import HallOfHeroes from './Components/HallOfHeroes';
import Footer from './Components/Footer';
import Header from './Components/Header';

export default function App() {
  return (
    <div className="page">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/deckBoard" component={DeckBoard} />
            <Route path="/hallofheroes" component={HallOfHeroes} />
            <Route path="/rules" component={Rules} />
            <Route path="/options" component={Options} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/contactus" component={ContactUs} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
