import React from 'react'
import './IteamTableDealStyle.css'
export default function IteamTableDeal(props) {
    return (
        <div className='IteamTableDeal'>
            <h4>{props.title}</h4>
            <h3>{props.number}</h3>
        </div>
    )
}
