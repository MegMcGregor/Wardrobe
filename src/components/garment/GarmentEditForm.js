
// import React, { useState, useEffect } from "react";
// import { updateGarment, getGarmentById } from "../../modules/GarmentManager";
// import GarmentManager from "../../modules/GarmentManager"
// import "./GarmentForm.css";
// import { useHistory, useParams, Link } from "react-router-dom"

// export const EditGarmentForm = () => {
//     const [garment, setGarment] = useState({ title: "", composition: "", brand: "" });
//     const [isLoading, setIsLoading] = useState(false);

//     const { garmentId } = useParams();
//     const history = useHistory();

//     const handleFieldChange = (event) => {
//         const stateToChange = { ...garment };
//         stateToChange[event.target.id] = event.target.value;
//         setGarment(stateToChange);
//     }


//     const updateExistingGarment = (event) => {
//         event.preventDefault()
//         setIsLoading(true);

//         const editedGarment = {
//             id: props.match.params.garmentId,
//             title: garment.title,
//             composition: garment.composition,
//             brand: garment.brand
//         }

//         GarmentManager.update(editedGarment)
//             .then(() => history.push("/garments")
//             )
//     }
//     useEffect(() => {
//         GarmentManager.getGarmentById(garmentId)
//           .then(garment => {
//             setGarment(garment);
//             setIsLoading(false);
//           });
//       }, []);

//       return (
//             <div className="main-container">
        
//                 <div className="page-title-container">
//                     <h2>
//                         new item
//                         </h2>
//                 </div>
//                 <form className="form-border">
//                     <div className="form-header-border">
//                         <div className="form-top-left">
//                             <span className="header-dot" id={selectedColor}></span>
//                             <div className="title-input">
//                                 <input type="text" id="title" placeholder="title" value={garment.title} onChange={handleControlledInputChange} />
//                             </div>
//                         </div>
//                         <div className="form-top-right">
//                             <select className="image-menu">
//                                 <option></option>
//                             </select>
//                         </div>
//                     </div>
        
//                     <div className="form-middle-border">
//                         <div className="color-container">
//                             <button value={garment.colorId} id="red" className="dot" onClick={handleControlledInputChange}></button>
//                             <button value={garment.colorId} id="orange" className="dot" onClick={handleControlledInputChange}></button>
//                             <button value={garment.colorId} id="yellow" className="dot" onClick={handleControlledInputChange}></button>
//                             <button value={garment.colorId} id="green" className="dot" onClick={handleControlledInputChange}></button>
//                             <button value={garment.colorId} id="blue" className="dot" onClick={handleControlledInputChange}></button>
//                             <button value={garment.colorId} id="purple" className="dot" onClick={handleControlledInputChange}></button>
//                             <button value={garment.colorId} id="black" className="dot" onClick={handleControlledInputChange}></button>
//                             <button value={garment.colorId} id="white" className="dot" onClick={handleControlledInputChange}></button>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="brand-name-input">brand:</label>
//                             <input type="text" id="brand" placeholder="brand" value={garment.brand} onChange={handleControlledInputChange} />
        
//                             <label htmlFor="type-select">type:</label>
//                             <select value={garment.typeId} name="typeId" id="typeId" onChange={handleControlledInputChange} className="form-menu">
//                                 <option value="0">select a type</option>
//                                 {types.map(type => (
//                                     <option key={type.id} value={type.id}>
//                                         {type.name}
//                                     </option>
//                                 ))}
//                             </select>
        
//                             <label htmlFor="season-select">season:</label>
//                             <select value={garment.seasonId} name="seasonId" id="seasonId" onChange={handleControlledInputChange} className="form-menu">
//                                 <option value="0">select a type</option>
//                                 {seasons.map(season => (
//                                     <option key={season.id} value={season.id}>
//                                         {season.name}
//                                     </option>
//                                 ))}
//                             </select>
        
//                             <label htmlFor="occasion-select">occasion:</label>
//                             <select value={garment.occasionId} name="occasionId" id="occasionId" className="form-menu" onChange={handleControlledInputChange}>
//                                 <option value="0">occasion</option>
//                                 {occasions.map(occasion => (
//                                     <option key={occasion.id} value={occasion.id}>
//                                         {occasion.name}
//                                     </option>
//                                 ))}
//                             </select>
        
//                             <label htmlFor="condition-select">condition:</label>
//                             <select value={garment.conditionId} name="conditionId" id="conditionId" className="form-menu" onChange={handleControlledInputChange}>
//                                 <option value="0">condition</option>
//                                 {conditions.map(condition => (
//                                     <option key={condition.id} value={condition.id}>
//                                         {condition.name}
//                                     </option>
//                                 ))}
//                             </select>
        
//                             <label htmlFor="compsition-input">composition:</label>
//                             <input id="composition" type="text" placeholder="composition" value={garment.composition} onChange={handleControlledInputChange} />
        
//                             <label htmlFor="purchase-date-select">purchase date:</label>
//                             <select value={garment.purchaseDateId} id="purchaseDateId" className="form-menu" onChange={handleControlledInputChange}>
//                                 <option>date</option>
//                                 {purchaseDates.map(purchaseDate => (
//                                     <option key={purchaseDate.id} value={purchaseDate.id}>
//                                         {purchaseDate.purchaseDate}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
        
//                     <div className="form-footer-border">
//                         <a className="form-back" href="/">back</a>
//                         <button className="form-save" onClick={handleClickSaveGarment}>save</button>
//                     </div>
        
//                 </form>
//             </div>
//         )
// }