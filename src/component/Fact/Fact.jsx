import React from 'react'
import './FactStyle.css'
export default function Fact(props) {
    return (
        <div className='fact'>
            <h1>{props.number}</h1>
            <p>{props.info}</p>
        </div>
    )
}
