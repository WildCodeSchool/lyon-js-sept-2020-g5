import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Game from './Components/Game';
import Rules from './Components/Rules';
import Options from './Components/Options';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div>
      <Router>
        <div>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/rules" component={Rules} />
            <Route path="/options" component={Options} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/contactUs" component={ContactUs} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
