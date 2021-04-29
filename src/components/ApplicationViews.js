import React from "react"
import { Redirect, Route } from "react-router-dom";
import { GarmentList } from "./garment/GarmentList"
import { GarmentDetail } from "./garment/GarmentDetailCard"
import { GarmentForm } from "./garment/GarmentForm"


export const ApplicationViews = () => {

    return (
        <>
            {/* <Route exact path="/">
                <Home />
            </Route> */}

            <Route exact path="/garments">
                < GarmentList/>
            </Route>

            <Route exact path="/garments/:garmentId(\d+)">
                < GarmentDetail/>
            </Route>

            <Route exact path="/garment-form">
                < GarmentForm/>
            </Route>
        </>       
    ) 

}
