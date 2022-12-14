import React from "react";
import marker from "../images/address-marker.png"

function JournalPreview(prop)
{
    return (
        <div className="journal-preview" style={{ backgroundImage: `url(${prop.photo})` }}>
            <div className="journal-preview-text montaga-font">
                <h2>{prop.date}</h2>
                <div className="address-container">
                    <img src={marker} className="address-marker-icon"></img>
                    <h3>{prop.place}</h3>
                </div>
            </div>
        </div>
    )
}

export default JournalPreview