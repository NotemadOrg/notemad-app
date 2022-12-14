import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";


function ToGoListForm(prop)
{
    return(
        <div className="page-with-navbar">
            <div>
                <Navbar/>
            </div>
            <div className="new-entry-page">
                <h1 className="headline-h1">New To-go List</h1>
                <div className="new-entry-container">
                    <div className="top-new-entry">
                        <div className="left-new-entry">
                            <input placeholder="Insert date here..." className="new-entry-header-input"></input>
                            <input placeholder="Insert address here..." className="new-entry-header-input"></input>
                        </div>
                    </div>
                    <div class="search_categories">
                        <div class>
                            <select>
                                <option value = "restaurant" selected="selected">Restaurant</option>
                                <option value = "art">Art</option>
                                <option value = "gallery">Gallery</option>
                                <option value = "entertainment">Entertainment</option>
                                <option value = "game">Game</option>
                            </select>
                        </div>
                    </div>
                    <div className="bottom-new-entry">
                        <textarea rows="20" cols="150" placeholder="Plan your visit to your to-go location.." className="new-entry-content-textarea"></textarea>
                    </div>
                    <div className="submit-journal-button">
                        <Link to="/list"><button className="buttons">Submit</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToGoListForm;