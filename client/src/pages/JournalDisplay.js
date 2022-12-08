import React from "react";
import JournalPreview from "../components/JournalPreview";
import NewJournalButton from "../components/NewJournalButton";

//view multiple journals

function JournalDisplay(prop)
{
    return(
        <div>
            <h1 className="journal-h1">Journal</h1>
            <NewJournalButton/>
            <div className="journal-display-row">
                <JournalPreview/>
                <JournalPreview/>
                <JournalPreview/>
                <JournalPreview/>
            </div>    
        </div>
    );
}

export default JournalDisplay;