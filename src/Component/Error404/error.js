import React from "react";
import { NavLink } from "react-router-dom";

const ErrorP = () => {
    return(
        <>
        <h1>Error 404 Not Found!!!</h1>
        <NavLink className="navbar-brand" to="/">Go to Home</NavLink>
        </>
    )
}

export default ErrorP;