import React, { useState, useEffect } from "react"
import { GarmentCard } from "./GarmentCard"
import { useHistory } from "react-router-dom"
import { getAllGarments, getGarmentById } from "../../modules/GarmentManager"
import "./GarmentList.css"


export const GarmentList = ({ selectedSeason, selectedType, selectedOccasion }) => {

    let history = useHistory();

    const [garments, setGarments] = useState([]);
    const [displayedGarments, setDisplayedGarments] = useState([]);

    const getGarments = () => {
        return getAllGarments().then(garmentsFromAPI => {
            setGarments(garmentsFromAPI);
            setDisplayedGarments(garmentsFromAPI)
        });
    };

    useEffect(() => {
        getGarments();
    }, []);

    useEffect(() => {
        const matchingSeason = garments.filter(garment => garment.seasonId === +selectedSeason)
        setDisplayedGarments(matchingSeason)
    }, [selectedSeason]);

    useEffect(() => {
        const matchingType = garments.filter(garment => garment.typeId === +selectedType)
        setDisplayedGarments(matchingType)
    }, [selectedType])



    return (
        <>
            <div className="main-container">
                <div className="page-title-container">
                    <h2>
                        my wardrobe
                </h2>
                </div>
                <div className="card-container">
                    {displayedGarments.map(garment =>
                        < GarmentCard
                            key={garment.id}
                            garment={garment} />
                    )}
                </div>
            </div>
        </>
    )
}