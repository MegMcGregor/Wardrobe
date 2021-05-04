import React, { useState, useEffect}  from "react"
import { GarmentCard } from "./GarmentCard"
import { useHistory } from "react-router-dom"
import { getAllGarments, getGarmentById } from "../../modules/GarmentManager"
import "./GarmentList.css"


export const GarmentList = () => {

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
                        my wardrobe
                </h2>
                </div>
                <div className="search-and-add">
                    <button type="button"
                     onClick={() => {history.push("/garments/garment-form")}}>New Item</button>

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