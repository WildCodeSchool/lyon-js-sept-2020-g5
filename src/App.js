import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
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
import CardsContext from './Contexts/CardsContext';
import DeckContext from './Contexts/DeckContext';
import OptionsContext from './Contexts/OptionsContext';
import hallWaiting from './Pictures/hallWaiting.png';

export default function App() {
  const [cards, setCards] = useState([
    {
      alignment: 'XXXX',
      id: 'XXXX',
      name: 'Chargement en cours',
      img: hallWaiting,
      atk: 'XXXX',
      hp: 'XXXX',
      power: 'XXXX',
      position: 'deck',
    },
  ]);
  const [deck, setDeck] = useState([]);
  const [isMute, setIsMute] = useState(false);
  const [pseudo, setPseudo] = useState('JS lover player');
  const [maxPower, setMaxPower] = useState(500);

  useEffect(() => {
    axios
      .get(
        'https://heroes-api-wrapper.herokuapp.com/heroes?heroIds=88,92,96,99,102,104,106,107,109,110,112,114,115,118,119,120,121,141,145,146,148,149,151,160,162,167,169,171,180,185,186,188,191,196,198,201,202,206,211,215,217,218,219,221,222,225,226,227,231,232,234,235,237,238,241,248,249,251,252,254,256,257,258,259,268,269,271,273,274,275,280,285,286,296,299,300,303,311,314,321,323,325,330,332,333,335,336,337,338,339,343,344,345,346,347,350,358,369,371,372,374,375,376,391,392,394,395,400,401,402,403,409,410,412,414,415,419,421,422,423,425,428,429,430,431,433,438,441,443,452,456,458,460,462,463,467,470,471,472,474,475,478,479,480,481,483,484,487,488,489,490,495,496,497,498,503,504,518,523,527,529,530,531,532,536,537,547,550,556,566,567,570,571,572,573,578,579,580,582,583,584,586,587,588,589,591,592,594,595,598,599,604,605,607,610,618,619,620,623,625,628,630,631,638,640,646,648,653,655,658,660,661,664,665,666,667,668,670,671,677,679,680,681,685,688,701,702,703,705,708,709,714,716,717,719,722,723,724'
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        const tabHeroes = data.map((hero) => {
          return {
            id: hero.id,
            name: hero.name,
            img: hero.image.url,
            atk: parseInt(hero.powerstats.strength, 10),
            hp: parseInt(hero.powerstats.durability, 10),
            power: parseInt(hero.powerstats.power, 10),
            alignment: hero.biography.alignment,
            position: 'deck',
          };
        });
        setCards(tabHeroes);
      });
  }, []);

  const addToDeck = (cardName) => {
    let newDeck = deck.slice();

    const totalPower = deck
      .map((card) => card.power)
      .reduce((acc, cur) => acc + cur, 0);

    if (newDeck.filter((heroe) => cardName === heroe.name).length === 0) {
      if (
        totalPower +
          cards.filter((heroe) => cardName === heroe.name)[0].power <=
        maxPower
      ) {
        newDeck.push(cards.filter((heroe) => cardName === heroe.name)[0]);
      } else {
        window.alert(
          'Be careful, your card is too powerful. Select another or start the game'
        );
      }
    } else {
      newDeck = newDeck.filter((heroe) => !cardName.includes(heroe.name));
    }
    setDeck(newDeck);
  };

  return (
    <div className="page">
      <Router>
        <Header />
        <main>
          <Switch>
            <OptionsContext.Provider
              value={{
                isMute,
                setIsMute,
                pseudo,
                setPseudo,
                maxPower,
                setMaxPower,
              }}
            >
              <Route exact path="/" component={Home} />
              <CardsContext.Provider value={{ cards, setCards }}>
                <DeckContext.Provider value={{ deck, setDeck, addToDeck }}>
                  <Route path="/game" component={Game} />
                  <Route path="/deckBoard" component={DeckBoard} />
                </DeckContext.Provider>
                <Route path="/hallofheroes" component={HallOfHeroes} />
              </CardsContext.Provider>

              <Route path="/rules" component={Rules} />
              <Route path="/options" component={Options} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/contactus" component={ContactUs} />
            </OptionsContext.Provider>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
