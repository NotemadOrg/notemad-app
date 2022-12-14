import React from "react";
import Navbar from "../components/Navbar";
import TogoCard from "../components/TogoCard";
import NewToGoListButton from "../components/NewToGoListButton";


function ToGoListPage(prop)
{
    let data1 = [{label:"Art", color:"#FFC2C2"}, {label:"Gallery", color:"#A7BBEE"}];
    let data2 = [{label:"Restaurant", color:"#9FE1AD"}, {label:"Italian", color:"#E1B79F"}, {label:"Brunch", color:"#E1DB9F"}];
    let data3 = [{label:"Entertainment", color:"#9FDDE1"}, {label:"Game", color:"#DC9FE1"}, {label:"Group Activity", color:"#E19F9F"}];
    let data4 = [{label:"Restaurant", color:"#9FE1AD"}, {label:"Sushi", color:"#9FE1D5"}];

    return(
        <div className="page-with-navbar">
            <Navbar/>
            <div className="togoPage-wrapper">
                <h1 className="headline-h1">My next destination...</h1>
                <NewToGoListButton />
                <div className="togoListContainer"> 
                    <TogoCard title="Blue Gallery" address="222 E 46th St, New York, NY 10017" category={data1}/>
                    <TogoCard title="Casa Limone" address="20 E 49th St, New York, NY 10017" category={data2}/>
                    <TogoCard title="Beat The Bomb Brooklyn" address="255 Water St, Brooklyn, NY 11201" category={data3}/>
                    <TogoCard title="Sushi Uesugi" address="267 36th St, Brooklyn, NY 11232" category={data4}/>
                </div>
            </div>
        </div>
    );
}

export default ToGoListPage;