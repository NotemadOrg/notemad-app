import React from "react";
import Navbar from "../components/Navbar";

//view individual journals

function JournalView(prop)
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
                            <h2>Date</h2>
                            <h4>Sample Address: 222 E 46th St, New York, NY 10017</h4>
                        </div>
                    </div>
                    <div className="bottom-new-entry ">
                        <img className="entry-image" src="https://www.nps.gov/stli/planyourvisit/images/Liberty-statue-with-manhattan_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false"></img>
                        <p className="view-entry-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default JournalView;