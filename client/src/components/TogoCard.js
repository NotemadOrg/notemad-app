import React from "react";
import Tag from "./Tag";
import CheckButton from "./CheckButton";
import marker from "../images/address-marker.png"


function TogoCard(prop)
{
    let catergories = prop.category;
    let tagList = catergories.map((tag) => <Tag category={tag.label} color={tag.color}/>);

    return (
        <div className="togo-container">
            <div className="togo-context">
                <h2>{prop.title}</h2>
                <div className="address-container">
                    <img src={marker} className="address-marker-icon"></img>
                    <h3 className="address-text">{prop.address}</h3>
                </div>
                <div className="tag-container">
                    {tagList}
                </div>
            </div>
            <div className="togo-button">

                <CheckButton/>
            </div>
        </div>
    )
}

export default TogoCard