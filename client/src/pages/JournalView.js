import React from "react";
import Navbar from "../components/Navbar";
import JournalEntry from "../components/JournalEntry"

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
                            <h2>July 4, 2022</h2>
                            {/* <h2>{props.date}</h2> */}
                            <h4>222 E 46th St, New York, NY 10017</h4>
                            {/* <h4>{props.place}</h4> */}
                        </div>
                    </div>
                    <div className="bottom-new-entry ">
                        <img className="entry-image" src="https://www.nps.gov/stli/planyourvisit/images/Liberty-statue-with-manhattan_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false"></img>
                        {/* <img src={props.photo}></img> */}
                        <p className="view-entry-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        {/* <p>{props.journaltext}</p> */}
                    </div>
                </div>

                {/* <JournalEntry date={props.date} place="Statue of Liberty" photo="https://www.nps.gov/stli/planyourvisit/images/Liberty-statue-with-manhattan_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false" journaltext="Today I went to the Statue of Liberty with my family."/> */}
            </div>
        </div>


    );
}

export default JournalView;