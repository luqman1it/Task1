import React from 'react'
import IteamTableDeal from '../IteamTableDeal/IteamTableDeal'
import './TableDealStyle.css'
export default function TableDeal() {
    const data = [
        { id: 0, title: "Total Flat Space", number: "185 m2" },
        { id: 1, title: "Floor number", number: "26th" },
        { id: 2, title: "Number of rooms", number: "4" },
        { id: 3, title: "Parking Available", number: "Yes" },
        { id: 4, title: "Payment Process", number: "Bank" },
    ];
    const iteamTabelDeal = data.map((elemnt, index) => {
        return <IteamTableDeal key={index} title={elemnt.title} number={elemnt.number} />
    })
    return (
        <div className='tableDeal'>
            {iteamTabelDeal}

        </div>
    )
}
