import React from "react";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import NavBar from "./navBar";

const Contact = () =>{

    const navigate = useNavigate();
    const contactPage = () =>{
    navigate("/contact")
}
    return(
        <>
            <h1>Contact Us Page</h1>
            <button onClick={contactPage}>Go to contact page</button>    
        </>
    )
}

export default Contact;