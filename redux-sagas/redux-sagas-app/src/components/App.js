import React, { Component } from 'react';

import './App.css'

class App extends Component {
  state = { open: false }

  handleFetchClick = () => {
    this.props.fetchStarWarsRequest()
    this.setState({ open: true })
  }

  handleConfirmClick = () => {
    this.props.confirmFetchRequest()
    this.setState({ open: false })
  }

  render() {
    return (
    <div>
        <h1>Redux Saga</h1>
        <div>
          {this.props.starWars.people.map((person, i) => <h4 key={i}>{person.name}</h4>)}
        </div>
        <div>
          {this.props.starWars.planet.map((planet, i) => <h4 key={i}>{planet.name}</h4>)}
        </div>
        <button onClick={this.props.fetchStarWarsRequest}>Load People</button>
        <button onClick={this.props.fetchStarWarsPlanetsRequest}>Load Planets</button>
      </div>
    )
  }
}

export default App;
