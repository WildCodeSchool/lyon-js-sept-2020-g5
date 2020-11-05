import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Game from './Components/Game';
import Rules from './Components/Rules';
import Options from './Components/Options';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import HallOfHeroes from './Components/HallOfHeroes';
import Footer from './Components/Footer';
import Header from './Components/Header';

const App = () => {
  return (
    <div className="page">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/rules" component={Rules} />
            <Route path="/options" component={Options} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/hallofheroes" component={HallOfHeroes} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
