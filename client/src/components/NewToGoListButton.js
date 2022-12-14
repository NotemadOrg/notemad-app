import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function NewToGoListButton(props) {
    return(
        <div className="new-journal-button-container">
            {/* Need to add onclick event that goes to create new entry page */}
            <Link to="/new-togo-entry"><button className="buttons">New To-go List</button></Link>
        </div>
    )
}

export default NewToGoListButton