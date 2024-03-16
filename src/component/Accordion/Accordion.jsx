import React from 'react'
import './AccordionStyle.css'
import Panel from './Panel'
import { useState } from 'react';
export default function () {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="accordion">
            <Panel
                title="Best useful links ?"
                before="Get"
                strong="the best villa"
                after="website template in HTML CSS and Bootstrap for your business.
                TemplateMo provides you the best free CSS templates in the world.
                Please tell your friends about it."
                isActive={activeIndex === 0}
                onShow={() => activeIndex === 0 ? setActiveIndex(-1) : setActiveIndex(0)}

            />
            <Panel
                title="How does this work ?"
                before="Dolor"
                strong="almesit amet,"
                after="consectetur adipiscing elit, 
                sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                isActive={activeIndex === 1}
                onShow={() => activeIndex === 1 ? setActiveIndex(-1) : setActiveIndex(1)}


            />
            <Panel
                title="Why is Villa Agency the best ?"
                before="Dolor"
                strong="almesit amet,"
                after="consectetur adipiscing elit, 
                sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                isActive={activeIndex === 2}
                onShow={() => activeIndex === 2 ? setActiveIndex(-1) : setActiveIndex(2)}
            />
        </div>
    )
}
