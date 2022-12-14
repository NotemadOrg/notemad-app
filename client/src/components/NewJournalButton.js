import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function NewJournalButton(props) {
    return(
        <div className="new-journal-button-container">
            {/* Need to add onclick event that goes to create new entry page */}
            <Link to="/new-entry"><button className="buttons">New Entry</button></Link>
        </div>
    )
}

export default NewJournalButton