import React from 'react'
import './FormStyle.css'
import SheduleVisit from '../Schedule/SheduleVisit'
export default function Form() {
    return (
        <form className='form' action="">
            <div className="name">
                <label htmlFor="name">Full Name</label>
                <input type="text" id='name' required placeholder='Your Name' />
            </div>
            <div className="email">
                <label htmlFor="email">Email Address</label>
                <input type="text" id='email' required placeholder='Your email' />
            </div>
            <div className="subject">
                <label htmlFor="subject">Full Name</label>
                <input type="text" id='subject' placeholder='Subject' />
            </div>
            <div className="message">
                <label htmlFor="message">Message</label>
                <textarea name="" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
            </div>
            <div>
                <SheduleVisit />
            </div>
        </form>
    )
}
