import React from "react";
import {Link, NavLink } from "react-router-dom";


const Contact = () =>{
    return(
        <>
        <h1>Contact Us Page</h1>
        <nav>
            <NavLink to={"/"}>Home</NavLink> <br />
            <NavLink to={"/about"}>About</NavLink> <br />
            <NavLink to={"/contact"}>Contact</NavLink>
        </nav>
    </>
    )
}

export default Contact;