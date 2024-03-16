import React, { useState, useEffect } from 'react'
import './HeroStyle.css'
import Category from '../Category/Category'
// import bg1 from '../../assets/images/banner-01.jpg'
// import bg2 from '../../assets/images/banner-02.jpg'
// import bg3 from '../../assets/images/banner-03.jpg'
export default function Hero() {
    // const images = [bg1, bg2, bg3];
    // const [currentImageIndex, setCurrentImageIndex] = useState(1);
    // const goToPreviousImage = () => {
    //     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    // }
    // const goToNextImage = () => {
    //     setCurrentImageIndex((nextIndex) => (nextIndex + 1) % images.length)
    // }
    // useEffect(() => {
    //     const intervalId = setInterval(goToNextImage, 3000);

    //     return () => clearInterval(intervalId);
    // }, [images.length]);
    return (
        <section className="hero" >
            <Category city="Toronto" country="Canada" content="hurry! get the best villa for you" />
            <span className="left">&lt;</span>
            <span className="right">&gt;</span>
        </section>
    )
}
