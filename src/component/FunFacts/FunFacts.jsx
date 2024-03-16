import React from 'react'
import Fact from '../Fact/Fact'
import './FunFactsStyle.css'
export default function FunFacts() {
    const data = [
        { id: 0, numer: "12", info: "Buildings Finished Now" },
        { id: 1, numer: "34", info: "Years Experience" },
        { id: 2, numer: "34", info: "Awwards Won 2023" },
    ];

    const dataFacts = data.map((element, index) => {
        return <Fact key={index} number={element.numer} info={element.info} />
    })
    return (
        <section className="funfacts">
            <div className="container">
                {dataFacts}
            </div>
        </section>
    )
}
