import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <Route>
      {
        () => props.loggedIn === true ? <Component {...props} /> : <Redirect to="/" use={props.handleLoginPopupClick()} /> 
      }
    </Route>
)}

export default ProtectedRoute;
