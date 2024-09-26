import React from "react";
import NavBar from "./navBar";

import {Link, NavLink } from "react-router-dom";

function Home(){
    return(
        <>
            <h1>Home Page</h1>
            <NavBar/>
        </>
    )
}

export default Home;