import React from "react";
import {Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import NavBar from "./navBar";

function About(){

    const navigate = useNavigate();
        const aboutPage = () =>{
        navigate("/about")
    }
    return(
        <>
            <h1>About Us Page</h1> 
            <button onClick={aboutPage}></button>     
        </>
    )
}

export default About;