import React, { useState, useEffect } from "react";
import checkAnimation from "../images/check-mark.gif"
import undone from "../images/gray-check.png"
import done from "../images/blue-check.png"

function CheckButton(prop)
{
    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
    }

    const [visited, setVisited] = useState(false);
    const [check, setCheck] = useState(undone);
    function checked()
    {
        setVisited(true);
        setCheck(checkAnimation);
    }
    function hover()
    {
        if(!visited) {setCheck(done);}
    }
    function unhover()
    {  
        if(!visited) {setCheck(undone);}
    }
    return (
        <img src={check} onClick={checked} onMouseOver={hover} onMouseOut={unhover} className="checkmark"></img>
    )
}

export default CheckButton