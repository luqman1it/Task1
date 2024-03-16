import React from 'react'
import './HomeContactStyle.css'
import BackGround from '../BackGround/BackGround'
import backImage from '../../assets/images/contact-bg.jpg';
import Map from '../Contact/Map';
import Form from '../Contact/Form';
import BoxInfoContact from '../Contact/BoxInfoContact';
export default function HomeContact() {
    return (
        <section className="home-contact">
            <BackGround secondHead="CONTACT US" mainHead="Get In Touch With Our Agents" urlImage={backImage} />
            <div className="container">
                <div className="contact-content">
                    <div className="map">
                        <Map />
                        <div className="info">
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
                    <div className="form-contact">
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    )
}
