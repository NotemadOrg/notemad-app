import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

//user enter new journals

function JournalForm(prop)
{
    return(
        <div className="page-with-navbar">
            <div>
                <Navbar/>
            </div>
            <div className="new-entry-page">
                <h1 className="headline-h1">New Entry</h1>
                <div className="new-entry-container">
                    <div className="top-new-entry">
                        <div className="left-new-entry">
                            <input placeholder="Insert date here..." className="new-entry-header-input"></input>
                            <input placeholder="Insert address here..." className="new-entry-header-input"></input>
                        </div>
                        <div className="right-new-entry">
                            <p className="new-entry-image-p">Upload an image...</p>
                            <input type="file" accept="image/png, image/jpeg"></input>
                        </div>
                    </div>
                    <div className="bottom-new-entry">
                        <textarea rows="20" cols="150" placeholder="Share your experience..." className="new-entry-content-textarea"></textarea>
                    </div>
                    <div className="submit-journal-button">
                        <Link to="/view-entry"><button className="buttons">Submit</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JournalForm;