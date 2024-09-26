import React from "react";
import NavBar from "./navBar";

import {Link, NavLink, Outlet } from "react-router-dom";

function Home(){
    return(
        <>
            <NavBar></NavBar>
            <Outlet/>
        </>
    )
}

export default Home;