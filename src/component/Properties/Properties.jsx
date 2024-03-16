import React from 'react'
import BgForAll from '../BgForAll/BgForAll'
import Type from '../Type/Type'
import Pagination from '../Pagination/Pagination'
import './PropertiesStyle.css'
import BoxProperties from '../ContentProperties/BoxProperties/BoxProperties'
import img1 from '../../assets/images/property-01.jpg'
import img2 from '../../assets/images/property-02.jpg'
import img3 from '../../assets/images/property-03.jpg'
import img4 from '../../assets/images/property-04.jpg'
import img5 from '../../assets/images/property-05.jpg'
import img6 from '../../assets/images/property-06.jpg'
import img7 from '../../assets/images/property-03.jpg'
import img8 from '../../assets/images/property-02.jpg'
import img9 from '../../assets/images/property-01.jpg'
import Footer from '../Footer/Footer'
export default function Properties() {
    const data = [
        {
            id: 0, srcImg: `${img1}`, catType: "Luxury Villa", catNum: "$2.264.000",
            title: "18 Mid Street Miami, OR 97219", bedrooms: "8", bathrooms: "8", area: "545m2", floor: "3", parking: "6 spots"
        },
        {
            id: 1, srcImg: `${img2}`, catType: "Luxury Villa", catNum: "$1.180.000",
            title: "18 Mid Street Miami, OR 97219", bedrooms: "8", bathrooms: "8", area: "545m2", floor: "3", parking: "6 spots"
        },
        {
            id: 2, srcImg: `${img3}`, catType: "Luxury Villa", catNum: "$2.264.000",
            title: "45 Mid Street Miami, OR 27001", bedrooms: "6", bathrooms: "5", area: "450m2", floor: "3", parking: "8 spots"
        },
        {
            id: 3, srcImg: `${img4}`, catType: "Luxury Villa", catNum: "$1.460.000",
            title: "18 Mid Street Miami, OR 97219", bedrooms: "5", bathrooms: "4", area: "225m2", floor: "3", parking: "10 spots"
        },
        {
            id: 4, srcImg: `${img5}`, catType: "Apartment", catNum: "$584.500",
            title: "18 Mid Street Miami, OR 97219", bedrooms: "4", bathrooms: "3", area: "125m2", floor: "25th", parking: "2 cars"
        },
        {
            id: 5, srcImg: `${img6}`, catType: "Penthouse", catNum: "$925.600",
            title: "18 Mid Street Miami, OR 97219", bedrooms: "4", bathrooms: "4", area: "180m2", floor: "38th", parking: "2 carss"
        },
        {
            id: 6, srcImg: `${img7}`, catType: "Penthouse", catNum: "$925.600",
            title: "18 Mid Street Miami, OR 97219", bedrooms: "4", bathrooms: "4", area: "180m2", floor: "38th", parking: "2 carss"
        },
        {
            id: 7, srcImg: `${img8}`, catType: "Penthouse", catNum: "$925.600",
            title: "18 Mid Street Miami, OR 97219", bedrooms: "4", bathrooms: "4", area: "180m2", floor: "38th", parking: "2 carss"
        },
        {
            id: 8, srcImg: `${img9}`, catType: "Penthouse", catNum: "$925.600",
            title: "18 Mid Street Miami, OR 97219", bedrooms: "4", bathrooms: "4", area: "180m2", floor: "38th", parking: "2 carss"
        },
    ]
    const dataProperties = data.map((element, index) => {
        return (
            <BoxProperties
                key={index}
                srcImg={element.srcImg}
                catType={element.catType}
                catNum={element.catNum}
                title={element.title}
                bedrooms={element.bedrooms}
                bathrooms={element.bedrooms}
                area={element.area}
                floor={element.floor}
                parking={element.parking} />
        )
    })
    return (
        <div className='prop'>
            <BgForAll title1="HOME / PROPERTIES" title2="properties" />
            <div className="container">
                <div className="properties-filter">
                    <Type title="Show All" />
                    <Type title="Apartment" />
                    <Type title="Villa House" />
                    <Type title="PentHouse" />
                </div>
                <div className="content-properties">
                    {dataProperties}
                </div>
                <Pagination />
            </div>
            <Footer />
        </div>
    )
}
