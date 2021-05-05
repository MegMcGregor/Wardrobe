import React, { useState, useEffect}  from "react"
import { GarmentCard } from "../garment/GarmentCard"
import { useHistory } from "react-router-dom"
import { getAllGarments } from "../../modules/GarmentManager"
import "../garment/GarmentList.css"


export const WorkList = () => {

    let history = useHistory();

    const [garments, setGarments] = useState([]);

    const getGarments = () => {
        return getAllGarments().then(garmentsFromAPI => {
            setGarments(garmentsFromAPI);
        });
    };

    useEffect(() => {
        getGarments();
    }, []);


    return (
        <>
            <div className="main-container">
                <div className="page-title-container">
                    <h2>
                        work
                </h2>
                </div>
                <div className="card-container">
                    {garments.map(garment =>
                        < GarmentCard 
                        key={garment.id} 
                        garment={garment} />
                    )}
                </div>
            </div>
        </>
    )
}