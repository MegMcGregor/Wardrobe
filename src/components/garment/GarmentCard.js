import React from "react"
import "./GarmentCard.css"


export const GarmentCard = () => {
    return (
        <>
        <div className="card-border">
            <div className="card-top-border">
                <img className="card-icon" alt="card-icon"></img>
                <span className="dot"></span>
            </div>
            <div classname="card-middle-border">
                <h3>Title</h3>
                <ul>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
                </ul>
            </div>
            <div className="card-bottom-border">
                <button>details</button>
            </div>
        </div>
        </>
    )
}
