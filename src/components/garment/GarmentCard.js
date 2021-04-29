import React from "react"
import "./GarmentCard.css"


export const GarmentCard = ({ garment }) => {

    return (
        <>
        <div className="card-border">
            <div className="card-top-border">
                <img className="card-icon" alt="card-icon"></img>
                <span className="dot"></span>
            </div>
            <div className="card-middle-border">
                <h3>{garment.title}</h3>
                <ul>
                <li>{garment.composition}</li>
                </ul>
            </div>
            <div className="card-bottom-border">
                <button>details</button>
            </div>
        </div>
        </>
    )
}
