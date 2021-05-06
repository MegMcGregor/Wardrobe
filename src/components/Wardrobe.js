import React, { useState, useEffect }from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
// import { getAllTypes } from "../modules/TypeManager"
// import { getAllOccasions } from "../modules/OccasionManager"
// import { getAllSeasons } from "../modules/SeasonManager"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Header } from "./header/Header.js"
 
export const Wardrobe = () => {

//   const [types, setTypes] = useState([]);
//   const [occasions, setOccasions] = useState([]);
//   const [seasons, setSeasons] = useState([])

//   useEffect(() => {
//     getAllSeasons()
//         .then(seasonsFromAPI => {
//             setSeasons(seasonsFromAPI)
//         })
// }, []);

// useEffect(() => {
//     getAllOccasions()
//         .then(occasionsFromAPI => {
//             setOccasions(occasionsFromAPI)
//         })
// }, []);

// useEffect(() => {
//     getAllTypes()
//         .then(typesFromAPI => {
//             setTypes(typesFromAPI)
//         })
// }, []);


// const handleSeasonSelectionChange = (event) => {
//   event.preventDefault()
//   let springSummerGarments = garments.filter(garment => garment.seasonId === 1)
//   let fallWinterGarments = garments.filter(garment => garment.seasonId === 2)
//   let yearRoundGarments = garments.filter(garment => garment.seasonId === 3)

//   if (event.target.id === 1) {
//     return springSummerGarments
//   }
//   else if (event.target.id === 2) {
//     return fallWinterGarments
//   }
//   else if (event.target.id === 3) {
//     return yearRoundGarments
//   }

  return (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem("app_user_id")) {
            return (
              <>
                <Header />
                <ApplicationViews
                // key={types.id}
                // key={occasions.id}
                // key={seasons.id}
                 />
              </>
            )
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>)
    }