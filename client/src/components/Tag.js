import React from "react";

function Tag(prop)
{
    return (
        <div className="tag-box" >
            {prop.category}
        </div>
    )
}

export default Tag