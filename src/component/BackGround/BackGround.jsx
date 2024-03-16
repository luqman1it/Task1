import React from 'react'
import './BackGroundStyle.css'
import SecondHeading from '../SecondHeading/SecondHeading'
import MainHeading from '../MainHeading/MainHeading'

export default function BackGround(props) {
    return (
        <section className="background" style={{ backgroundImage: `url(${props.urlImage})` }}>
            <div className="content-background" style={{ color: "white", textAlign: "center", }}>
                <SecondHeading head={props.secondHead} />
                <MainHeading head={props.mainHead} />
            </div>
        </section>
    )
}
