import React from 'react'
import './CategoryStyle.css'
export default function Category(props) {
    return (
        <div className='category'>
            <div className="title">
                <span>{props.city},</span>
                <span>{props.country}</span>
            </div>
            <div className="content">
                <h1>{props.content}</h1>
            </div>
        </div>
    )
}
