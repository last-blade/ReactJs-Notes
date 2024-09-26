import React from "react";
import {Link, NavLink, Outlet } from "react-router-dom";
import NavBar from "./navBar";

const Contact = ({pageName}) =>{
    return(
        <>
            <h1>Contact Us Page</h1>
            <Outlet/>
        </>
    )
}

export default Contact;