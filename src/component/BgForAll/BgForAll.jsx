import React from 'react'
import './BgForAllStyle.css'
import SecondTitlePages from './SecondTitlePages'
import TitlePages from './TitlePages'
export default function BgForAll({ title1, title2 }) {
    return (
        <div className='bg-for-all'>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "80px", flexDirection: "column" }}>
                <SecondTitlePages title={title1} />
                <TitlePages title={title2} />
            </div>
        </div>
    )
}
