import React from 'react'

export default function Planet(props) {
    return (
        <div className="planet">
            <p>{props.planet.name}</p>
        </div>
    )
}
