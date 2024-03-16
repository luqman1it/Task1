import React from 'react'
import './MainHeadingStyle.css'
export default function MainHeading(props) {
    return (
        <div className='main-heading'>
            <h1 className='title'>{props.head}</h1>
        </div>
    )
}
