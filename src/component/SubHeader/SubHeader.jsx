import './SubHeaderStyle.css'
import React, { useState } from 'react'

export default function SubHeader() {

    return (
        <div className="subheader">
            <div className="container flexbet">

                <ul className="info">
                    <li><i className='fa-solid fa-envelope orange'></i><span>luqman1it@gmail.com</span></li>
                    <li><i className='fa-solid fa-map orange'></i><span>Syria, Latakia, Focal X</span></li>
                </ul>

                <ul className="socail-links">
                    <a href="https://www.facebook.com/profile.php?id=100050707350166" target='_blank'><li><i class="fa-brands fa-facebook"></i></li></a>
                    <a href="https://www.linkedin.com/in/luqman1it/" target='_blank'><li><i class="fa-brands fa-linkedin"></i></li></a>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
            </div>
        </div>




    )
}






