import React from "react"
import { Redirect, Route } from "react-router-dom";
import { GarmentList } from "./garment/GarmentList"
import { GarmentDetail } from "./garment/GarmentDetailCard"
import { GarmentForm } from "./garment/GarmentForm"
import { GarmentEditForm } from "./garment/GarmentEditForm"
 

export const ApplicationViews = ({selectedSeason}) => {

    return (
        <>
            <Route exact path="/garments/garment-form">
                < GarmentForm />
            </Route>

            <Route exact path="/garments/:garmentId(\d+)">
                < GarmentDetail />
            </Route>

            <Route exact path="/garments">
                < GarmentList
                selectedSeason={selectedSeason} />
            </Route>

            <Route path="/garments/:garmentId(\d+)/edit">
                < GarmentEditForm />
            </Route> 
            
        </>
    )

}
