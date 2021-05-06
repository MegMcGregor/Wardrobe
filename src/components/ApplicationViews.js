import React from "react"
import { Redirect, Route } from "react-router-dom";
import { GarmentList } from "./garment/GarmentList"
import { GarmentDetail } from "./garment/GarmentDetailCard"
import { GarmentForm } from "./garment/GarmentForm"
import { EditGarmentForm } from "./garment/GarmentEditForm"
 
// keep track of selection from headaer and pass value into application views



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

            {/* <Route exact path="/edit-garment">
                < EditGarmentForm />
            </Route> */}
            
        </>
    )

}
