import React from "react"
import "./GarmentForm.css"

export const GarmentForm = () => {
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
                        <span class="header-dot"></span>
                        <div className="title-input">
                            <input type="text" placeholder="title" />
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
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand-name-input">brand:</label>
                        <input type="text" />

                        <label htmlFor="type-select">type:</label>
                        <select className="type-menu">
                            <option>type</option>
                        </select>

                        <label htmlFor="occasion-select">occasion:</label>
                        <select className="occasion-menu">
                            <option>occasion</option>
                        </select>

                        <label htmlFor="condition-select">condition:</label>
                        <select className="condition-menu">
                            <option>condition</option>
                        </select>

                        <label htmlFor="compsition-input">compsition:</label>
                        <input type="text" />

                        <label htmlFor="purchase-date-select">purchase date:</label>
                        <select className="date-menu">
                            <option>date</option>
                        </select>
                    </div>
                </div>

                <div className="form-footer-border">
                    <a className="form-back"href="/">back</a>
                    <a className="form-save" href="/">save</a>
                </div>

            </form>
        </div>
    )

}