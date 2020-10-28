import React from 'react';
import axios from 'axios';
import HallCard from './HallCard';

class HallOfHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
    this.getHeroes = this.getHeroes.bind(this);
  }

  componentDidMount() {
    this.getHeroes();
  }

  getHeroes() {
    axios
      .get(
        'https://heroes-api-wrapper.herokuapp.com/heroes?heroIds=1,2,3,4,5,6,7,8,9,10'
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
            universe: hero.biography.publisher,
            alignment: hero.biography.alignment,
          };
        });
        this.setState({ cards: tabHeroes });
      });
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        <h1>Hall of heroes</h1>
        <div>
          {cards.map((hero) => (
            <HallCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    );
  }
}

export default HallOfHeroes;
