import React from "react";
import { NavLink } from "react-router-dom";
import Contact from "./contact";

function NavBar(){
    return(
        <>
            <nav>
                <NavLink to={"/"}>Home</NavLink> <br />
                <NavLink to={"/about"}>About</NavLink> <br />
                <NavLink to={"/contact"}>Contact</NavLink>
            </nav>
        </>
    )
}

export default NavBar;