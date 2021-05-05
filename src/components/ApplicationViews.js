import React from "react"
import { Redirect, Route } from "react-router-dom";
import { GarmentList } from "./garment/GarmentList"
import { GarmentDetail } from "./garment/GarmentDetailCard"
import { GarmentForm } from "./garment/GarmentForm"

// keep track of selection from headaer and pass value into application views



export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/garments/garment-form">
                < GarmentForm />
            </Route>

            <Route exact path="/garments/:garmentId(\d+)">
                < GarmentDetail />
            </Route>

            <Route exact path="/garments">
                < GarmentList />
            </Route>
        </>
    )

}
