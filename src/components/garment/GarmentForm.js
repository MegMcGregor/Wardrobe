import React, { useState, useEffect } from "react"
import { useHistory } from "react-router";
import { addGarment, getAllGarments } from "../../modules/GarmentManager"
import { getAllColors } from "../../modules/ColorManager"
import { getAllTypes } from "../../modules/TypeManager"
import { getAllOccasions } from "../../modules/OccasionManager"
import { getAllConditions } from "../../modules/ConditionManager"
import { getAllSeasons } from "../../modules/SeasonManager"
import { getAllDates } from '../../modules/DateManager'
import "./GarmentForm.css"

export const GarmentForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()
    const userId = sessionStorage.getItem("app_user_id")


    const [garment, setGarment] = useState({
        userId: parseInt(userId),
        title: "",
        imageId: 0,
        colorId: 0,
        seasonId: 0,
        brand: "",
        typeId: 0,
        occasionId: 0,
        composition: "",
        conditionId: 0,
        purchaseDate: 0
    });

    const [images, setImages] = useState([]);
    const [colors, setColors] = useState([]);
    const [types, setTypes] = useState([]);
    const [occasions, setOccasions] = useState([]);
    const [dates, setDates] = useState([])
    const [conditions, setConditions] = useState([])
    const [seasons, setSeasons] = useState([])


    const handleControlledInputChange = (event) => {

        const newGarment = { ...garment }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newGarment[event.target.id] = selectedVal
        setGarment(newGarment)
    };

    

    const handleClickSaveGarment = (event) => {
        event.preventDefault()

        // const colorId = garment.colorId
        const typeId = garment.typeId;
        const conditionId = garment.conditionId
        const occasionId = garment.occasionId
        const purchaseDate = garment.purchaseDate
        const seasonId = garment.seasonId
        const brand = garment.brand
        const composition = garment.composition
        const title = garment.title


        if (typeId === 0 || conditionId === 0 || occasionId === 0) {
            window.alert("Please complete the form before submitting");
        } else {
            addGarment(garment)
                .then(() => history.push("/garments"));
        }
    }



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
        getAllDates()
            .then(datesFromAPI => {
                setSeasons(datesFromAPI)
            })
    }, []);




    return (
        <div className="main-container">

            <div className="page-title-container">
                <h2>
                    new item
                </h2>
            </div>
            <form className="form-border">

                <div className="form-header-border">
                    <div className="form-top-left">
                        <span className="header-dot" id={colors.id}></span>
                        <div className="title-input">
                            <input type="text" id="title" placeholder="title" value={garment.title} onChange={handleControlledInputChange} />
                        </div>
                    </div>
                    <div className="form-top-right">
                        <select className="image-menu">
                            <option></option>
                        </select>
                    </div>
                </div>

                <div className="form-middle-border">
                    <div className="color-container">
                        <button value={garment.colorId} id="red" className="dot" onClick={handleControlledInputChange}></button>
                        <button value={garment.colorId} id="orange" className="dot" onClick={handleControlledInputChange}></button>
                        <button value={garment.colorId} id="yellow" className="dot"onClick={handleControlledInputChange}></button>
                        <button value={garment.colorId} id="green" className="dot"onClick={handleControlledInputChange}></button>
                        <button value={garment.colorId} id="blue" className="dot" onClick={handleControlledInputChange}></button>
                        <button value={garment.colorId} id="purple" className="dot" onClick={handleControlledInputChange}></button>
                        <button value={garment.colorId} id="black" className="dot" onClick={handleControlledInputChange}></button>
                        <button value={garment.colorId} id="white" className="dot"onClick={handleControlledInputChange}></button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand-name-input">brand:</label>
                        <input type="text" id="brand" placeholder="brand" value={garment.brand} onChange={handleControlledInputChange} />

                        <label htmlFor="type-select">type:</label>
                        <select value={garment.typeId} name="typeId" id="typeId" onChange={handleControlledInputChange} className="form-menu">
                            <option value="0">select a type</option>
                            {types.map(type => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="season-select">season:</label>
                        <select value={garment.seasonId} name="seasonId" id="seasonId" onChange={handleControlledInputChange} className="form-menu">
                            <option value="0">select a type</option>
                            {seasons.map(season => (
                                <option key={season.id} value={season.id}>
                                    {season.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="occasion-select">occasion:</label>
                        <select value={garment.occasionId} name="occasionId" id="occasionId" className="form-menu" onChange={handleControlledInputChange}>
                            <option value="0">occasion</option>
                            {occasions.map(occasion => (
                                <option key={occasion.id} value={occasion.id}>
                                    {occasion.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="condition-select">condition:</label>
                        <select value={garment.conditionId} name="conditionId" id="conditionId" className="form-menu" onChange={handleControlledInputChange}>
                            <option value="0">condition</option>
                            {conditions.map(condition => (
                                <option key={condition.id} value={condition.id}>
                                    {condition.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="compsition-input">composition:</label>
                        <input id="composition" type="text" placeholder="composition" value={garment.composition} onChange={handleControlledInputChange} />

                        <label htmlFor="purchase-date-select">purchase date:</label>
                        <select id="purchaseDate" className="form-menu">
                            <option>date</option>
                        </select>
                    </div>
                </div>

                <div className="form-footer-border">
                    <a className="form-back" href="/">back</a>
                    <button className="form-save" onClick={handleClickSaveGarment}>save</button>
                </div>

            </form>
        </div>
    )
}