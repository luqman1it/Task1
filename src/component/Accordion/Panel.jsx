import React from 'react'

export default function Panel({ title, before, strong, after, isActive, onShow }) {
    return (
        <div className="accorion-item">
            <h2 onClick={onShow} className={isActive ? "accordion-header isActiveNow" : "accordion-header"}>{title}</h2>
            {isActive && <p style={{ paddingTop: "20px" }}>
                {before} <span style={{ fontWeight: "bold" }}>{strong}</span> {after}</p>}
        </div>
    )
}
