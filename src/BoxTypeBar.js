import React from "react";
import {iconDiameter, BoxTypeClasses} from "./config/constants";

export function BoxTypeBar(props) {

    const additionalStyling = {
        "width": iconDiameter + "px",
        "height": iconDiameter + "px",
        "marginRight": "10px"
    };

    return (
        <div className="bar">
            {
                BoxTypeClasses.map(type => <div key={type} style={additionalStyling} className={type}/>)
            }
        </div>
    )
}