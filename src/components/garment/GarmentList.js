import React, { useState, useEffect}  from "react"
import { GarmentCard } from "./GarmentCard"
import { useHistory } from "react-router-dom"
import { getAllGarments, getGarmentById } from "../../modules/GarmentManager"
import "./GarmentList.css"


export const GarmentList = () => {

    let history = useHistory();

    /////////variables\\\\\\\\\\\\\\\
    const [garments, setGarments] = useState([]);

    ///////////get garments\\\\\\\\\\\\\\\\\\\
    const getGarments = () => {
        return getAllGarments().then(garmentsFromAPI => {
            setGarments(garmentsFromAPI);
        });
    };

    //////////////////use effect\\\\\\\\\\\\\\\\
    useEffect(() => {
        getGarments();
    }, []);


    return (
        <>
            <div className="main-container">
                <div className="page-title-container">
                    <h2>
                        my wardrobe
                </h2>
                </div>
                <div className="card-container">
                    {garments.map(garment =>
                        < GarmentCard key={garment.id} garment={garment} />
                    )}
                </div>
            </div>
        </>
    )
}