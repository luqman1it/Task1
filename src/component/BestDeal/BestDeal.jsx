import React from 'react'
import SecondHeading from '../SecondHeading/SecondHeading'
import MainHeading from '../MainHeading/MainHeading'
import './BestDealStyle.css'
import TypesVilla from '../TypesVilla/TypesVilla'
import TableDeal from '../TableDeal/TableDeal'
import imageDeal from '../../assets/images/deal-01.jpg'
import SheduleVisit from '../../component/Schedule/SheduleVisit'
import { Link } from 'react-router-dom'
export default function BestDeal() {
    return (
        <section className="bestdeal">
            <div className="container">
                <SecondHeading head="best deal" />
                <div className='topDeal'>
                    <div className='headDeal'><MainHeading head="find your best deal right now" /></div>
                    <TypesVilla />

                </div>
                <div className="bestdeal-info">
                    <TableDeal />
                    <div className="image-deal">
                        <img src={imageDeal} alt="img deal" />
                    </div>
                    <div className="extra-info">
                        <h4>Extra Info About Property</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</p>
                        <p>When you need free CSS templates, you can simply type TemplateMo in any search engine website.
                            In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                        <Link to="/propertdetails"><SheduleVisit icon="fa-solid fa-calendar calnderIcon" /></Link>
                    </div>
                </div>

            </div>


        </section>
    )
}
