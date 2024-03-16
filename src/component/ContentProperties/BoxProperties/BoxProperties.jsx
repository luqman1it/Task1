import React from 'react'
import './BoxProperties.css'
import { Link } from 'react-router-dom'
import SheduleVisit from '../../Schedule/SheduleVisit'
export default function BoxProperties({ srcImg, catType, catNum, title, bedrooms, bathrooms, area, floor, parking }) {
    return (
        <div className='box-properties'>
            <Link to="/properties">
                <img src={srcImg} alt="" />
            </Link>
            <div className="category-box">
                <span >{catType}</span>
                <span>{catNum}</span>
            </div>
            <h4>{title}</h4>
            <div className="rooms">
                <ul className='category-rooms'>
                    <li>Bedrooms: <span>{bedrooms}</span></li>
                    <li>Bathrooms: <span>{bathrooms}</span></li>
                    <li>Area: <span>{area}</span></li>
                    <li>Floor: <span>{floor}</span></li>
                    <li>Parking: <span>{parking}</span></li>
                </ul>
            </div>
            <div className="shedule">
                <Link to="/propertdetails"><SheduleVisit /></Link>
            </div>
        </div>
    )
}
