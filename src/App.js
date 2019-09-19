import React, { Component } from 'react'
import './App.css';
import Film from './components/Film';

export default class App extends Component {

  state = {
    films: []
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(resp => resp.json())
      .then(starwars => this.setState({
        films: starwars.results
      }))
  }

  filmCards = () => {
    return this.state.films.map(film => {
      return <Film film={film} key={film.episode_id} />
    })
  }

  render() {
    return (
      <div className="App" >
        {this.filmCards()}
      </div>
    )
  }
}

