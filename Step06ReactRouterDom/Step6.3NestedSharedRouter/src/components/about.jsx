import React from "react";
import {Link, NavLink, Outlet } from "react-router-dom";
import NavBar from "./navBar";

function About(){
    return(
        <>
            <h1>About Us Page</h1>      
            <Outlet/>
        </>
    )
}

export default About;