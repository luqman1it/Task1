import React from 'react'
import './FeaturedStyle.css'
import featuredImage from '../../assets/images/featured.jpg'
import MainHeading from '../MainHeading/MainHeading'
import TableFeatured from '../TableFeatured/TableFeatured'
import featuredIcon from '../../assets/images/featured-icon.png'
import { Link } from 'react-router-dom'
import SecondHeading from '../SecondHeading/SecondHeading'
import Accordion from '../Accordion/Accordion'
export default function Featured() {

    return (
        <section className="featured">
            <div className="container">
                <div className="featured-image">
                    <img className='featuredImage' src={featuredImage} alt="" />
                    <Link className="icon" to="/propertdetails" >
                        <img src={featuredIcon} alt="FeaturedIcon" />
                    </Link>
                </div>
                <div className="featured-content">
                    <div className="featured-heading">
                        <SecondHeading head="Featured" />
                        <MainHeading head="Best Appartment & Sea View" />
                    </div>
                    <Accordion />
                </div>
                <TableFeatured />

            </div>
        </section>
    )
}
