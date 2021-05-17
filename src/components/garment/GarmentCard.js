import React from "react"
import "./GarmentCard.css"
import { Link } from "react-router-dom";



export const GarmentCard = ({ garment }) => {

    return (
        <>
        <div className="card-border">
            <div className="card-top-border">
                <img src={require(`../../../public/images/${garment.type? garment.type.image : "dress.svg"}`).default} className="card-icon" alt="card-icon" ></img>
                <span className={garment.color.name}></span>
            </div>
            <div className="card-middle-border">
                <h3>{garment.title}</h3>
                <ul>
                <li>{garment.composition}</li>
                </ul>
            </div>
            <div className="card-bottom-border">
            <Link to={`/garments/${garment.id}`}>
                <button className="details-button">details</button>
            </Link>
            </div>
        </div>
        </>
    )
}
