import React from 'react';
import './Pokecard.css'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends React.Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img alt="" src={imgSrc} />
        <div>Type: {this.props.type}</div>
        <div>Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
