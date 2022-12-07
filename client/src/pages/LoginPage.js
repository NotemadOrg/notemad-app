import React from "react";
import logo from "../images/logo-icon.png"
import Logo from "../components/Logo"

function LoginPage(prop)
{
    return(
        <div className="loginpage">
            <Logo />
            {/* Should the line below be className="entire-content" ? */}
            <div className="entire-content">
                <div className="content-p">
                    <p>Username</p>
                    <p>Password</p>
                </div>
                <div className="content-input">
                    <input type="text"></input>
                    <input type="password"></input>
                </div>
            </div>
            <button className="login-signup-button">Login</button>
        </div>
    );
}

export default LoginPage;