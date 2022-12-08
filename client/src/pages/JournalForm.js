import React from "react";
import Navbar from "../components/Navbar";

//user enter new journals

function JournalForm(prop)
{
    return(
        <div className="page-with-navbar">
            <div>
                <Navbar/>
            </div>
            <div>
                <h1 className="journal-h1">New Entry</h1>
                <div className="new-entry-container">
                    <div className="top-new-entry">
                        <div className="left-new-entry">
                            <input placeholder="Insert title here..." className="new-entry-header-input"></input>
                            <input placeholder="Insert address here..." className="new-entry-header-input"></input>
                        </div>
                        <div className="right-new-entry">
                            <input type="file" accept="image/png, image/jpeg"></input>
                        </div>
                    </div>
                    <div className="bottom-new-entry">
                        <textarea rows="20" cols="150" placeholder="Share your experience..." className=".new-entry-content-textarea"></textarea>
                    </div>
                    <div className="submit-journal-button">
                        <button className="new-journal-button">Submit</button>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default JournalForm;