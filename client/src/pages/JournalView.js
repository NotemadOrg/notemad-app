import React from "react";
import Navbar from "../components/Navbar";
import image from "../photos/IMG_3146.png";

import { BrowserRouter as Router, Route } from "react-router-dom";


//view individual journals

function JournalView(props)
{
    return(
        <div className="page-with-navbar">
            <div>
                <Navbar/>
            </div>
            <div className="new-entry-page">
                <h1 className="new-entry-h1"> Entry</h1>


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
                        {/* <img src={props.photo}></img> */}
                        <p className="view-entry-p">I love these painting!</p>
                        {/* <p>{props.journaltext}</p> */}
                    </div>
                </div>

                {/* <JournalEntry date={props.date} place="Statue of Liberty" photo="https://www.nps.gov/stli/planyourvisit/images/Liberty-statue-with-manhattan_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false" journaltext="Today I went to the Statue of Liberty with my family."/> */}
            </div>
        </div>


    );
}

export default JournalView;