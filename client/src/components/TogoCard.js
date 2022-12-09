import React from "react";
import Tag from "./Tag";
import CheckButton from "./CheckButton";
import marker from "../images/address-marker.png"

function TogoCard(prop)
{
    return (
        <div className="togo-container">
            <div className="togo-context">
                <h2>{prop.title}</h2>
                <div>
                    <img src={marker}></img>
                    <h3>{prop.address}</h3>
                </div>
                <div className="tag-container">
                    <Tag category="Gallery"/>
                    <Tag category="Art"/>
                </div>
            </div>
            <div className="togo-button">
                <CheckButton/>
            </div>
        </div>
    )
}

export default TogoCard