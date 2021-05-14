import React, { useState, useEffect } from "react"
import "./Header.css"
import { getAllTypes } from "../../modules/TypeManager"
import { getAllOccasions } from "../../modules/OccasionManager"
import { getAllSeasons } from "../../modules/SeasonManager"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import img from "./Wardrobe.png"
import headertype from "../images/headertype.png"

export const Header = ({ setSelectedSeason, setSelectedType, setSelectedOccasion, clearUser, isAuthenticated }) => {
    const [types, setTypes] = useState([]);
    const [occasions, setOccasions] = useState([]);
    const [seasons, setSeasons] = useState([])

    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push('/');
    }

    useEffect(() => {
        getAllSeasons()
            .then(seasonsFromAPI => {
                setSeasons(seasonsFromAPI)
            })
    }, []);

    useEffect(() => {
        getAllOccasions()
            .then(occasionsFromAPI => {
                setOccasions(occasionsFromAPI)
            })
    }, []);

    useEffect(() => {
        getAllTypes()
            .then(typesFromAPI => {
                setTypes(typesFromAPI)
            })
    }, []);

    const handleSeasonSelectionChange = (event) => {
        event.preventDefault()
        setSelectedSeason(event.target.value)
    }

    const handleTypeSelectionChange = (event) => {
        event.preventDefault()
        setSelectedType(event.target.value)
    }

    const handleOccasionSelectionChange = (event) => {
        event.preventDefault()
        setSelectedOccasion(event.target.value)
    }



    return (
        <>

            <div className="header-container">
                <div className="top-header">
                    <a onClick={handleLogout}>Logout</a>
                </div>

                <div className="bottom-header">
                    <div className="logo-container">
                        <img className="logo" alt="logo" src={img} onClick={() => history.push(`/garments`)}></img>
                    </div>
                    <div className="title-container">
                        {/* <img className="title-header" alt="wardrobe" src={headertype}></img> */}
                        <h1>Wardrobe</h1>
                        <div className="nav-container">
                            <nav>
                                <li><button type="button" className="nav-button"
                                    onClick={() => { history.push("/garments/garment-form") }}>new item</button>
                                </li>
                                {/* <li><button className="nav-button">reports</button> */}
                                {/* </li> */}
                                <div className="nav-select">
                                    <select onChange={handleTypeSelectionChange}>
                                        <option value="0">type</option>
                                        {types.map(type => (
                                            <option key={type.id} value={type.id}>
                                                {type.name}
                                            </option>
                                        ))}
                                    </select>
                                    <select onChange={handleOccasionSelectionChange}>
                                        <option value="0">occasion</option>
                                        {occasions.map(occasion => (
                                            <option key={occasion.id} value={occasion.id}>
                                                {occasion.name}
                                            </option>
                                        ))}
                                    </select>
                                    <select onChange={handleSeasonSelectionChange}>
                                        <option value="0">season</option>
                                        {seasons.map(season => (
                                            <option key={season.id} value={season.id}>
                                                {season.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </nav>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}