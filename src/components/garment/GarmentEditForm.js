
import React, { useState, useEffect } from "react";
import { updateGarment, getGarmentById } from "../../modules/GarmentManager";
import "./GarmentForm.css";
import { useHistory, useParams, Link } from "react-router-dom"
import { getAllColors } from "../../modules/ColorManager"
import { getAllTypes } from "../../modules/TypeManager"
import { getAllOccasions } from "../../modules/OccasionManager"
import { getAllConditions } from "../../modules/ConditionManager"
import { getAllSeasons } from "../../modules/SeasonManager"
import { getAllPurchaseDates } from '../../modules/DateManager'

export const GarmentEditForm = () => {
    const [garment, setGarment] = useState({ title: "", composition: "", brand: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [colors, setColors] = useState([]);
    const [newSelectedColor, setNewSelectedColor] = useState([]);
    const [types, setTypes] = useState([]);
    const [occasions, setOccasions] = useState([]);
    const [purchaseDates, setPurchaseDates] = useState([])
    const [conditions, setConditions] = useState([])
    const [seasons, setSeasons] = useState([])
    const { garmentId } = useParams();
    const history = useHistory();

    const handleFieldChange = (event) => {
        event.preventDefault()
        const stateToChange = { ...garment };

        if (event.target.id.includes("colorId")) {
            stateToChange.colorId = event.target.value
            let newSelectedColor = event.target.className
            setNewSelectedColor(newSelectedColor)
            console.log(newSelectedColor)
            setGarment(stateToChange)
        }

        else {
            stateToChange[event.target.id] = event.target.value;
            setGarment(stateToChange);
        }
    }


    const updateExistingGarment = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedGarment = {
            id: garmentId,
            title: garment.title,
            imageId: garment.imageId,
            colorId: +garment.colorId,
            seasonId: +garment.seasonId,
            typeId: +garment.typeId,
            occasionId: +garment.occasionId,
            composition: garment.composition,
            conditionId: +garment.conditionId,
            purchaseDateId: +garment.purchaseDateId,
            brand: garment.brand,
            userId: +garment.userId
        }

        updateGarment(editedGarment)
            .then(() => history.push("/garments")
            )
    }

    useEffect(() => {
        getGarmentById(garmentId)
            .then(garment => {
                setGarment(garment);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        getAllTypes()
            .then(typesFromAPI => {
                setTypes(typesFromAPI)
            })
    }, []);

    useEffect(() => {
        getAllColors()
            .then(colorsFromAPI => {
                setColors(colorsFromAPI)
            })
    }, []);


    useEffect(() => {
        getAllOccasions()
            .then(occasionsFromAPI => {
                setOccasions(occasionsFromAPI)
            })
    }, []);

    useEffect(() => {
        getAllConditions()
            .then(conditionsFromAPI => {
                setConditions(conditionsFromAPI)
            })
    }, []);

    useEffect(() => {
        getAllSeasons()
            .then(seasonsFromAPI => {
                setSeasons(seasonsFromAPI)
            })
    }, []);

    useEffect(() => {
        getAllPurchaseDates()
            .then(datesFromAPI => {
                setPurchaseDates(datesFromAPI)
            })
    }, []);

    return (
        <div className="main-container">

            <div className="page-title-container">
                <h2>
                    edit item
                        </h2>
            </div>
            <form className="form-border">
                <div className="form-header-border">
                    <div className="form-top-left">
                        <span className={newSelectedColor}></span>
                        <div className="title-input">
                            <input type="text" id="title" placeholder="title" value={garment.title} onChange={handleFieldChange} />
                        </div>
                    </div>
                    <div className="form-top-right">
                    </div>
                </div>

                <div className="form-middle-border">
                    <div className="color-container">
                        <button value="1" id="colorId-1" className="red-dot" onClick={handleFieldChange}></button>
                        <button value="2" id="colorId-2" className="orange-dot" onClick={handleFieldChange}></button>
                        <button value="3" id="colorId-3" className="yellow-dot" onClick={handleFieldChange}></button>
                        <button value="4" id="colorId-4" className="green-dot" onClick={handleFieldChange}></button>
                        <button value="5" id="colorId-5" className="blue-dot" onClick={handleFieldChange} ></button>
                        <button value="6" id="colorId-6" className="purple-dot" onClick={handleFieldChange}></button>
                        <button value="7" id="colorId-7" className="black-dot" onClick={handleFieldChange}></button>
                        <button value="8" id="colorId-8" className="white-dot" onClick={handleFieldChange} ></button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand-name-input">brand:</label>
                        <input type="text" id="brand" placeholder="brand" value={garment.brand} onChange={handleFieldChange} />

                        <label htmlFor="type-select">type:</label>
                        <select value={garment.typeId} name="typeId" id="typeId" onChange={handleFieldChange} className="form-menu">
                            <option value="0">select a type</option>
                            {types.map(type => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="season-select">season:</label>
                        <select value={garment.seasonId} name="seasonId" id="seasonId" onChange={handleFieldChange} className="form-menu">
                            <option value="0">select a type</option>
                            {seasons.map(season => (
                                <option key={season.id} value={season.id}>
                                    {season.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="occasion-select">occasion:</label>
                        <select value={garment.occasionId} name="occasionId" id="occasionId" className="form-menu" onChange={handleFieldChange}>
                            <option value="0">occasion</option>
                            {occasions.map(occasion => (
                                <option key={occasion.id} value={occasion.id}>
                                    {occasion.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="condition-select">condition:</label>
                        <select value={garment.conditionId} name="conditionId" id="conditionId" className="form-menu" onChange={handleFieldChange}>
                            <option value="0">condition</option>
                            {conditions.map(condition => (
                                <option key={condition.id} value={condition.id}>
                                    {condition.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="compsition-input">composition:</label>
                        <input id="composition" type="text" placeholder="composition" value={garment.composition} onChange={handleFieldChange} />

                        <label htmlFor="purchase-date-select">purchase date:</label>
                        <select value={garment.purchaseDateId} id="purchaseDateId" className="form-menu" onChange={handleFieldChange}>
                            <option>date</option>
                            {purchaseDates.map(purchaseDate => (
                                <option key={purchaseDate.id} value={purchaseDate.id}>
                                    {purchaseDate.purchaseDate}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-footer-border">
                    <Link to to={"/garments"}><button>back</button></Link>
                    <button className="form-save" onClick={updateExistingGarment}>save</button>
                </div>

            </form>
        </div>
    )
}