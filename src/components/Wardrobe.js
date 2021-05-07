import React, { useState, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { getAllTypes } from "../modules/TypeManager"
import { getAllOccasions } from "../modules/OccasionManager"
import { getAllSeasons } from "../modules/SeasonManager"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Header } from "./header/Header.js"

export const Wardrobe = () => {

  const [types, setTypes] = useState([]);
  const [occasions, setOccasions] = useState([]);
  const [seasons, setSeasons] = useState([])
  const [selectedSeason, setSelectedSeason] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const [selectedOccasion, setSelectedOccasion] = useState(null)

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


  return (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem("app_user_id")) {
            return (
              <>
                <Header
                  setSelectedSeason={setSelectedSeason}
                  setSelectedOccasion={setSelectedOccasion}
                  setSelectedType={setSelectedType}
                />
                <ApplicationViews
                  selectedSeason={selectedSeason} />
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