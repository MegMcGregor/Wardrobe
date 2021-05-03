import React, { useState, useEffect } from "react"
import { useHistory } from "react-router";
import { addGarment } from "../../modules/GarmentManager"
import { getAllGarments } from "../../modules/GarmentManager"
import "./GarmentForm.css"

export const GarmentForm = () => {

    const [garment, setGarment] = useState({
        title: "",
        imageId: 0,
        colorId: 0,
        brand: "",
        typeId: 0,
        occasionId: 0,
        composition: "",
        purchaseDate: 0
    });

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()

    // const [images, setImages] = useState([]);
    // const [colors, setColors] = useState([]);
    const [types, setTypes] = useState([]);
    // const [occasions, setOccasions] = useState([]);
    // const [dates, setDates] = useState([])



    const handleControlledInputChange = (event) => {

        const newGarment = { ...garment }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newGarment[event.target.id] = selectedVal
        setGarment(newGarment)
    };

    useEffect(() => {
        getAllGarments()
            .then(garmentsFromAPI => {
                setGarment(garmentsFromAPI)
            })
    }, []);



    const handleClickSaveGarment = (event) => {
            event.preventDefault()

            const colorId = garment.colorId
            const typeId = garment.typeId;
            const conditionId = garment.conditionId
            const occasionId = garment.occasion
            
            if (typeId === 0 || conditionId === 0 || occasionId === 0) {
                window.alert("Please complete the form before submitting");
            } else {
                addGarment(garment)
                    .then(() => history.push("/garments"));
            }
        }




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
                        <span className="header-dot"></span>
                        <div className="title-input">
                            <input type="text" placeholder="title" onChange={handleControlledInputChange} />
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
                        <span id="red" className="dot" onChange={handleControlledInputChange}></span>
                        <span id="orange" className="dot" onChange={handleControlledInputChange}></span>
                        <span id="yellow" className="dot" onChange={handleControlledInputChange}></span>
                        <span id="green" className="dot" onChange={handleControlledInputChange} ></span>
                        <span id="blue" className="dot" onChange={handleControlledInputChange} ></span>
                        <span id="purple" className="dot" onChange={handleControlledInputChange} ></span>
                        <span id="black" className="dot" onChange={handleControlledInputChange} ></span>
                        <span id="white" className="dot" onChange={handleControlledInputChange} ></span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand-name-input">brand:</label>
                        <input id="brand" type="text" onChange={handleControlledInputChange} />

                        <label htmlFor="type-select">type:</label>
                        <select value={garment.typeId} name="typeId" id="typeId" onChange={handleControlledInputChange} className="form-menu">
                            <option value="0">select a type</option>
                            {types.map(type => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="occasion-select">occasion:</label>
                        <select id="occasionId" className="menu">
                            <option>occasion</option>
                        </select>

                        <label htmlFor="condition-select">condition:</label>
                        <select id="conditionId" className="menu">
                            <option>condition</option>
                        </select>

                        <label htmlFor="compsition-input">compsition:</label>
                        <input id="compostion" type="text" />

                        <label htmlFor="purchase-date-select">purchase date:</label>
                        <select id="purchaseDate" className="menu">
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