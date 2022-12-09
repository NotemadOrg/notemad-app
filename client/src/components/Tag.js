import React from "react";

function Tag(prop)
{
    return (
        <div className="tag-box" style={{backgroundColor: prop.color}}>
            {prop.category}
        </div>
    )
}

export default Tag