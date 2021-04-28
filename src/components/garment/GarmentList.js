import React from "react"
import { GarmentCard} from "./GarmentCard"
import "./GarmentList.css"


export const GarmentList = () => {

    return (
        <>
            <h2>my wardrobe</h2>
            <div className="card-container">
                <GarmentCard />
            </div>
        </>
    )
}