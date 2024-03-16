import React from 'react'
import BgForAll from '../BgForAll/BgForAll'
import SecondHeading from '../SecondHeading/SecondHeading'
import MainHeading from '../MainHeading/MainHeading'
import BoxInfoContact from './BoxInfoContact'
import Map from '../Contact/Map'
import './ContactStyle.css'
import Form from './Form'
import Footer from '../Footer/Footer'
export default function Contact() {
    return (
        <div className='contact-us'>
            <BgForAll title1="HOME / CONTACT US" title2="CONTACT US" />
            <div className="container container-us">
                <div className="contact-us-content">
                    <SecondHeading head="Contact us" />
                    <MainHeading head="Get In Touch With Our Agents" />
                    <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
                    <div className="boxes-contact">
                        <BoxInfoContact
                            icon="fa-solid fa-phone"
                            title="010-020-0340"
                            type="Phone Number" />
                        <BoxInfoContact
                            icon="fa-solid fa-envelope"
                            title="info@villa.co"
                            type="Business Email" />
                    </div>
                </div>
                <div className="form-contact-us">
                    <Form />
                </div>
            </div>
            <div style={{ paddingTop: "60px", height: "500px" }} className="container">
                <Map />
            </div>
            <Footer />

        </div>
    )
}
