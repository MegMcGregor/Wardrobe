import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Header } from "./header/Header.js"

export const Wardrobe = () => (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem("app_user_id")) {
            return (
              <>
                <Header />
                {/* <ApplicationViews /> */}
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
    </>
  )