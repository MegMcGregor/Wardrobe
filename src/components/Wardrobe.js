import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const Wardrobe = () => (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem("app_user_id")) {
            return (
              <>
                <ApplicationViews />
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