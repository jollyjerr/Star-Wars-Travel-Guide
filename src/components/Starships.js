import React, { Component } from 'react'
import Starship from './Starship'

export default class Starships extends Component {

    state = {
        starships: []
    }

    componentDidMount() {
        this.props.starships.map(starshipURL => {
            fetch(starshipURL)
                .then(resp => resp.json())
                .then(json => this.setState({
                    starships: [...this.state.starships, json]
                }))
        })
    }

    starshipCards = () => {
        return this.state.starships.map((starship, index) => {
            return <Starship starship={starship} key={index} />
        })
    }

    render() {
        return (
            <div>
                {this.starshipCards()}
            </div>
        )
    }
}

