import React from 'react'
import './SheduleVisitStyle.css'
export default function SheduleVisit({ icon }) {
    return (
        <div className='shedule'>
            <i class={icon}></i>
            <span>Shedule a visit</span>
        </div>
    )
}
