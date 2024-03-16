import React from 'react'
import './SecondHeadingStyle.css'
export default function SecondHeading(props) {
    return (
        <div className='second-head'>| {props.head}</div>
    )
}
