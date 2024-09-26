import React from "react";
import NavBar from "./navBar";

import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";


function Home(){
    const navigate = useNavigate();
        const homePage = () =>{
        navigate("/")
    }

    return(
        <>
            <h1>Home Page</h1>
            <NavBar></NavBar>
            <button onClick={homePage}>Go to Homepage</button>
        </>
    )
}

export default Home;