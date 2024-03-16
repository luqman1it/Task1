import React from 'react'
import './VideoStyle.css'
import BackGround from '../BackGround/BackGround'
import backImage from '../../assets/images/video-bg.jpg';
import videoFrame from '../../assets/images/video-frame.jpg'
export default function Video() {
    return (
        <section className="video">
            <BackGround secondHead="video view" mainHead="Get Closer View & Different Feeling" urlImage={backImage} />
            <div className="video-frame">
                <img src={videoFrame} alt="" />
                <a href="https://www.youtube.com" target='_blank'>
                    <i className='fa fa-play'></i>
                </a>
            </div>
        </section>
    )
}
