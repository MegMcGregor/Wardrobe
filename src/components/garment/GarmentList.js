import React from "react"
import { GarmentCard} from "./GarmentCard"
import "./GarmentList.css"


export const GarmentList = () => {

    return (
        <>
        <div className="main-container">
            <div className="page-title-container">
                <h2>
                    my wardrobe
                </h2>
            </div>
            <div className="card-container">
                <GarmentCard />
                <GarmentCard />
                <GarmentCard />
                <GarmentCard />
                <GarmentCard />
                <GarmentCard />
            </div>
         </div>
        </>
    )
}