import React from "react";
import JournalPreview from "../components/JournalPreview";
import NewJournalButton from "../components/NewJournalButton";
import Navbar from "../components/Navbar";
import image1 from "../photos/IMG_1151.png";
import image2 from "../photos/IMG_2640.png";
import image3 from "../photos/IMG_2689.png";
import image4 from "../photos/IMG_3086.png";


//view multiple journals

function JournalDisplay(prop) {
    return (
        <div className="page-with-navbar">
            <div>
                <Navbar />
            </div>
            <div className="journal-display-container">
                <h1 className="headline-h1">Journal</h1>
                <NewJournalButton />
                <div className="journal-display-row">
                    <JournalPreview date="Sept. 7, 2020" place="The Museum of Modern Art" photo={image1}/>
                    <JournalPreview date="Nov. 11, 2020" place="Machi Machi" photo={image2}/>
                    <JournalPreview date="Nov. 13, 2020" place="Two Wheels" photo={image3}/>
                    <JournalPreview date="Dec. 4, 2020" place="IT'SUGAR" photo={image4}/>
                </div>
            </div>
        </div>
    );
}

export default JournalDisplay;