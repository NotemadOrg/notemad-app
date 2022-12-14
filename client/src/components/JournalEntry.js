import React from "react";
import image from "../photos/IMG_3146.png";

// commponent for one journal

function JournalView(props)
{
    return(
        <div className="new-entry-container">
        <div className="top-new-entry" style={{flexDirection:"column"}}>
            <div className="left-new-entry">
                <h2>Dec. 14, 2022</h2>
                {/* <h2>{props.date}</h2> */}
                <h4>Blue Gallery</h4>
                {/* <h4>{props.place}</h4> */}
            </div>
        </div>
        <div className="bottom-new-entry ">
            <img className="entry-image" src={image}></img>
            {/* <img className="entry-image" src={props.photo}></img> */}
            <p className="view-entry-p">I love these painting!</p>
            {/* <p className="view-entry-p">{props.journaltext}</p> */}
        </div>
    </div>


    );
}

export default JournalView;