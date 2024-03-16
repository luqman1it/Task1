import { NavLink } from 'react-router-dom'
import SheduleVisit from '../Schedule/SheduleVisit'
import './HeaderStyle.css'
import { useState } from 'react';
export default function Header() {
    const [burger, setBurger] = useState(true);
    const [close, setClose] = useState(false);
    const [showSubHeader, setShowSubHeader] = useState(false);

    function onhandle() {
        setBurger(!burger);
        setClose(!close);

    }
    window.onscroll = function () {
        if (window.scrollY > 200) {
            setShowSubHeader(true);
        }
        else {
            setShowSubHeader(false);
        }
    }
    return (
        <header className={showSubHeader ? 'header fixed' : "header"}>
            <div className="container ">
                <div className="logo">
                    <h1>VILLA</h1>
                </div>
                <nav className='links-page '>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/properties">Properties</NavLink>
                    <NavLink to="/propertdetails">Propert Details</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <SheduleVisit icon="fa-solid fa-calendar calnderIcon" />
                </nav>
                {burger && <i class="fa-solid fa-bars bar burger-menu" onClick={onhandle}></i>}
                {close && <i class="fa-solid fa-xmark close" onClick={onhandle}></i>}
                {close && <div className="drop-down" onClick={onhandle}>
                    <nav className='links-page-drop' >
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/properties">Properties</NavLink>
                        <NavLink to="/propertdetails">Propert Details</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </nav>
                </div>}



            </div>
        </header>
    )
}