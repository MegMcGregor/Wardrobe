import React from "react"
import "./GarmentDetailCard.css"

export const GarmentDetail = () => {
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
                        <span class="dot"></span>
                        <h2>title</h2>
                    </div>
                    <div className="detail-container-top-right">
                        <img alt="clothing icon"></img>
                    </div>
                </div>


                <div className="detail-info-border">
                    <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>

                <div className="detail-footer-border">
                    <div className="detail-container-bottom-left">
                        <a href="/">back</a>
                    </div>
                    <div className="detail-container-bottom-right">
                         <a href="/">edit</a>
                         <a href="/">delete</a>
                    </div>
                </div>

            </div>
            
        </div>
    )
}