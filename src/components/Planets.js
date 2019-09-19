import React, { Component } from 'react'
import Planet from './Planet'

export default class Planets extends Component {

    state = {
        planets: []
    }

    componentDidMount() {
        this.props.planets.map(planetURL => {
            fetch(planetURL)
                .then(resp => resp.json())
                .then(json => this.setState({
                    planets: [...this.state.planets, json]
                }))
        })
    }

    planetCards = () => {
        return this.state.planets.map((planet, index) => {
            return <Planet planet={planet} key={index}  />
        })
    }

    render() {
        return (
            <div className="planetContainer">
            <h2>Planets</h2>
                {this.planetCards()}
            </div>
        )
    }
}

