import React from "react";
import logo from "../images/logo-icon.png"

function SignInPage(prop)
{
    return(
        <div className="signuppage">
            <img src={logo}></img>
            <h1>NoteMad</h1>
            {/* <div className="signup-email-content">
                <p>Email</p>
                <input type="email"></input>
            </div>
            <div className="signup-username-content">
                <p>Username</p>
                <input type="text"></input>
            </div>
            <div className="signup-password-content">
                <p>Password</p>
                <input type="password"></input>
            </div> */}
            <div className="entire-content">
                <div className="content-p">
                    <p>Email</p>
                    <p>Username</p>
                    <p>Password</p>
                </div>
                <div className="content-input">
                    <input type="email"></input>
                    <input type="name"></input>
                    <input type="password"></input>
                </div>
            </div>

            <button>Sign Up</button>
        </div>
    );
}

export default SignInPage;