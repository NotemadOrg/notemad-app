import React from "react";
import Navbar from "../components/Navbar";
import JournalPreview from "../components/JournalPreview";
import image1 from "../photos/IMG_1151.png";
import image2 from "../photos/IMG_2640.png";
import image3 from "../photos/IMG_2689.png";
import image4 from "../photos/IMG_3086.png";

function ProfilePage(prop)
{
    return(
        <div className="page-with-navbar">
            <Navbar/>
            <div className="profile-wrapper">
                <h1 className="headline-h1">Profile</h1>
                <div className="profile-content">
                    <div className="profileInfo-container">
                        <div className="profile-pic"></div>
                        <div className="profile-name">name</div>
                        <div className="profile-email">email@email.com</div>
                    </div>
                    <div className="profile-journalSnippet">
                        <h2>Places you visited recently</h2>
                        <div className="profile-journalList">
                            <JournalPreview date="Sept. 7, 2020" place="The Museum of Modern Art" photo={image1}/>
                            <JournalPreview date="Nov. 11, 2020" place="Machi Machi" photo={image2}/>
                            <JournalPreview date="Nov. 13, 2020" place="Two Wheels" photo={image3}/>
                            <JournalPreview date="Dec. 4, 2020" place="IT'SUGAR" photo={image4}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;