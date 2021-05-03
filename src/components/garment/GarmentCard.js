import React from "react"
import "./GarmentCard.css"
import { Link } from "react-router-dom";



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
            <Link to={`/garments/${garment.id}`}>
                <button>details</button>
            </Link>
            </div>
        </div>
        </>
    )
}
