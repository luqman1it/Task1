import React from 'react'
import ItemTabelFeatured from './ItemTabelFeatured'

export default function TableFeatured() {
    const itemsFeatured = [
        { id: 0, titleItem: "250 m2", infoItem: "Total Flat Space", icon: 'src/assets/images/info-icon-01.png' },
        { id: 1, titleItem: "Contract", infoItem: "Contract Ready", icon: 'src/assets/images/info-icon-02.png' },
        { id: 2, titleItem: "Payment", infoItem: "Payment Process", icon: 'src/assets/images/info-icon-03.png' },
        { id: 3, titleItem: "Safety", infoItem: "24/7 Under Control", icon: 'src/assets/images/info-icon-04.png' },
    ]
    const items = itemsFeatured.map((elemnt, index) => {
        return <ItemTabelFeatured
            key={index}
            icon={elemnt.icon}
            titleItem={elemnt.titleItem}
            infoItem={elemnt.infoItem}
        />
    })
    return (
        <div className='tableFeatured'>
            {items}
        </div>
    )
}
