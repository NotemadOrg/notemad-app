import React from "react";
import Navbar from "../components/Navbar";
import TogoCard from "../components/TogoCard";

function ToGoListPage(prop)
{
    return(
        <div className="page-with-navbar">
            <Navbar/>
            <div className="togoListContainer"> 
                <TogoCard title="Blue Gallery" address="222 E 46th St, New York, NY 10017" catergory1="Art" catergory2="Gallery"/>
                <TogoCard title="Casa Limone" address="20 E 49th St, New York, NY 10017" catergory1="Restaurant" catergory2="Brunch"/>
                <TogoCard title="Sushi Uesugi" address="267 36th St, Brooklyn, NY 11232" catergory1="Restaurant" catergory2="Sushi"/>
            </div>
        </div>
    );
}

export default ToGoListPage;