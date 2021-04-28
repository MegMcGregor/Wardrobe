import React from "react"
import { Redirect, Route } from "react-router-dom";
import { GarmentList } from "./garment/GarmentList"


export const ApplicationViews = () => {

    return (
        <>
            {/* <Route exact path="/">
                <Home />
            </Route> */}

            <Route exact path="/garments">
                < GarmentList/>
            </Route>
        </>       
    ) 

}
