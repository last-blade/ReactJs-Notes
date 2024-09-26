import React from "react";

import {Link, NavLink } from "react-router-dom";

function Home(){
    return(
        <>
            <h1>Home Page</h1>
            <nav>
                <NavLink to={"/"}>Home</NavLink> <br />
                <NavLink to={"/about"}>About</NavLink> <br />
                <NavLink to={"/contact"}>Contact</NavLink>
            </nav>
        </>
    )
}

export default Home;