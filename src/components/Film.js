import React from 'react'
import Starship from './Starships'
import Planet from './Planets'

export default function Film(props) {
    return (
        <div>
            <h1>{props.film.title}</h1>
            <Planet planets={props.film.planets} />
            <Starship starships={props.film.starships} />
        </div>
    )
}
