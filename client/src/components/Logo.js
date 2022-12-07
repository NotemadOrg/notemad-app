import React from "react"
import logo from "../images/logo-icon.png"

function Logo(prop)
{
    return(
        <div className="logo-and-text">
            <img src={logo}></img>
            <h1>NoteMad</h1>
        </div>
    )
}

export default Logo;