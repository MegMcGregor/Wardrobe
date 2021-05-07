import React, { useState, useEffect } from "react";
import { getAllGarments, getGarmentById, deleteGarment } from "../../modules/GarmentManager";
import { useParams, useHistory } from "react-router-dom";
import "./GarmentDetailCard.css";

export const GarmentDetail = () => {
    const [garment, setGarment] = useState({ title: "", composition: "", brand: "" })
    const [isLoading, setIsLoading] = useState(true);
    const { garmentId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getGarmentById(garmentId)
            .then(garment => {
                const garmentCopy = { ...garment }
                garmentCopy.title = garment.title
                garmentCopy.composition = garment.composition
                garmentCopy.brand = garment.brand
                setGarment(garmentCopy);
                setIsLoading(false);
            });
    }, [garmentId]);


    // const handleDeleteGarment = (id) => {
    //     deleteGarment(id)
    //     .then(() => getAllGarments().then(setGarments));
    // };



    return (
        <div className="main-container">

            <div className="page-title-container">
                <h2>
                    garment details
                </h2>
            </div>

            <div className="detail-card-container">

                <div className="detail-card-header-border">
                    <div className="detail-container-top-left">
                        <span className="dot"></span>
                        <h2>{garment.title}</h2>
                    </div>
                    <div className="detail-container-top-right">
                        <img alt="clothing icon"></img>
                    </div>
                </div>

                <div className="detail-info-border">
                    <ul>
                        <li>{garment.purchaseDate?.purchaseDate}</li>
                        <li>{garment.brand}</li>
                        <li>{garment.type?.name}</li>
                        <li>{garment.occcasion?.name}</li>
                        <li>{garment.season?.name}</li>
                        <li>{garment.condition?.name}</li>
                        <li>{garment.composition}</li>
                    </ul>
                </div>

                <div className="detail-footer-border">
                    <div className="detail-container-bottom-left">
                    <button onClick={() => history.goBack()}>Back</button>
                    </div>
                    <div className="detail-container-bottom-right">
                        <button type="button"
                          onClick={() => history.push(`/garments/${garment.id}/edit`)}>
                          edit</button>
                    
                        <button type="button"
                        >delete</button>
                    </div>
                </div>

            </div>

        </div>
    )
}