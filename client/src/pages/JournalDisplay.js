import React from "react";
import JournalPreview from "../components/JournalPreview";
import NewJournalButton from "../components/NewJournalButton";
import Navbar from "../components/Navbar";

//view multiple journals

function JournalDisplay(prop) {
    return (
        <div className="page-with-navbar">
            <div>
                <Navbar />
            </div>
            <div className="journal-display-container">
                <h1 className="journal-h1">Journal</h1>
                <NewJournalButton />
                <div className="journal-display-row">
                    <JournalPreview />
                    <JournalPreview />
                    <JournalPreview />
                    <JournalPreview />
                </div>
            </div>
        </div>
    );
}

export default JournalDisplay;