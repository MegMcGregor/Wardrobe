import React from "react"
import { Redirect, Route } from "react-router-dom";
import { GarmentList } from "./garment/GarmentList"
import { DressList } from "./type/DressList"
import { JeansList } from "./type/JeansList"
import { PantsList } from "./type/PantsList"
import { ShortsList } from "./type/ShortsList"
import { SkirtsList } from "./type/SkirtsList"
import { TopsList } from "./type/TopsList"
import { TeesList } from "./type/TeesList"
import { SwimList } from "./type/SwimList"
import { AthleticList } from "./occasion/AthleticList"
import { CasualList } from "./occasion/CasualList"
import { DressyList } from "./occasion/DressyList"
import { FormalList } from "./occasion/FormalList"
import { LoungeList } from "./occasion/LoungeList"
import { WorkList } from "./occasion/WorkList"
import { FallWinterList } from "./season/FW"
import { SpringSummerList } from "./season/SS"
import { YearroundList } from "./season/Year-round"
import { GarmentDetail } from "./garment/GarmentDetailCard"
import { GarmentForm } from "./garment/GarmentForm"


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

            <Route exact path="/garments/dresses">
                < DressList />
            </Route>

            <Route exact path="/garments/jeans">
                < JeansList />
            </Route>

            <Route exact path="/garments/pants">
                < PantsList />
            </Route>

            <Route exact path="/garments/shorts">
                < ShortsList />
            </Route>

            <Route exact path="/garments/skirts">
                < SkirtsList />
            </Route>

            <Route exact path="/garments/swim">
                < SwimList />
            </Route>

            <Route exact path="/garments/tees">
                < TeesList />
            </Route>

            <Route exact path="/garments/tops">
                < TopsList />
            </Route>
            
            <Route exact path="/garments/athletic">
                < AthleticList />
            </Route>

            <Route exact path="/garments/casual">
                < CasualList />
            </Route>

            <Route exact path="/garments/dressy">
                < DressyList />
            </Route>

            <Route exact path="/garments/formal">
                < FormalList />
            </Route>

            <Route exact path="/garments/lounge">
                < LoungeList />
            </Route>

            <Route exact path="/garments/work">
                < WorkList />
            </Route>

            <Route exact path="/garments/fall-winter">
                < FallWinterList />
            </Route>

            <Route exact path="/garments/spring-summer">
                < SpringSummerList />
            </Route>

            <Route exact path="/garments/year-round">
                < YearroundList />
            </Route>
        </>
    )

}
