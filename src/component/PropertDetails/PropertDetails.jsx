import React from 'react'
import BgForAll from '../BgForAll/BgForAll'
import mainImage from '../../assets/images/property-01.jpg'
import TableFeatured from '../TableFeatured/TableFeatured'
import BestDeal from '../BestDeal/BestDeal'
import Footer from '../Footer/Footer'
import './PropertyDetailsStyle.css'
import Accordion from '../Accordion/Accordion'
export default function PropertDetails() {
    return (
        <div className='properties-deatails'>
            <BgForAll title1="Home / SINGLE PROPERTY" title2="SINGLE PROPERTY" />
            <div className="container property">
                <div className="single-property">
                    <div className="main-img">
                        <img src={mainImage} alt="" />
                    </div>
                    <div className="info-property">
                        <span className='type-property'>Appartment</span>
                        <h2>24 New Street Miami, OR 24560</h2>
                        <p>Get the best villa agency HTML CSS Bootstrap Template for your company website. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.</p>
                        <p>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>

                    </div>
                    <Accordion />
                </div>
                <div className='table-property'><TableFeatured /></div>

            </div>
            <BestDeal />
            <Footer />

        </div>
    )
}
