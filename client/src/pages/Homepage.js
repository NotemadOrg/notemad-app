import React from "react";
import Logo from "../components/Logo";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function Homepage(prop)
{
    return(
        <div className="homepage">
            <Logo />
            <Link to="/login"><button className="login-signup-button">Login</button></Link>
            {/* <button>Login</button> */}
            <Link to="/signup"><button className="login-signup-button">Sign Up</button></Link>
            {/* <button>Sign Up</button> */}
        </div>
    );
}

export default Homepage;