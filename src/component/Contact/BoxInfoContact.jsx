import React from 'react'

export default function BoxInfoContact({ icon, title, type }) {
    return (
        <div style={{ display: "flex", borderRadius: "10px", alignItems: "center", padding: "30px 40px", boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)" }}>
            <i style={{ color: "var(--main-color)", fontSize: "32px", marginRight: "15px" }} className={icon}></i>
            <div >
                <h2 style={{ fontSize: "18px" }}>{title}</h2>
                <h4 style={{ fontSize: "15px", color: "#aaaaaa" }}>{type}</h4>
            </div>
        </div>
    )
}
