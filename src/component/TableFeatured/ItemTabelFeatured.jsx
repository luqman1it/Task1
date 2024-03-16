import React from 'react'

export default function ItemTabelFeatured({ icon, titleItem, infoItem }) {
    return (
        <div className='itemTableFeatured'>
            <img src={icon} alt="" style={{ marginRight: "20px" }} />
            <div>
                <h4 style={{ marginBottom: "10px" }}>{titleItem}</h4>
                <span style={{ color: "#aaa" }}>{infoItem}</span>
            </div>
        </div >
    )
}
