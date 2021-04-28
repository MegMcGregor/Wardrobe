import React from "react"
import "./Header.css" 
import img from "./Wardrobe.png"

export const Header = () => {
    return (
        <>
        <div className="header-container">

            <div className="top-header">
                    <a href="/">Logout</a>
                    <img className="user-icon"></img>
            </div>

            <div className="bottom-header">

                <div className="logo-container">
                    <img className="logo" alt="logo" src={img}></img>
                </div>

                <div className="title-container">
                    <h1>Wardrobe</h1>
                </div> 

                <div className="nav-container">
                    <nav></nav>
                </div>

            </div>

        </div>

        </>
    )
}