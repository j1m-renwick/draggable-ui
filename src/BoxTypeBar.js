import React from "react";
import {iconDiameter, BoxTypeClasses} from "./config/constants";
import {Box} from "./Box";

export function BoxTypeBar(props) {

    const additionalStyling = {
        "width": iconDiameter + "px",
        "height": iconDiameter + "px",
        "marginRight": "10px"
    };

    return (
        <div className="bar">
            {
                BoxTypeClasses.map(boxType => {
                    return (
                        <div>
                            <div key={boxType} style={additionalStyling} className={boxType}/>
                            <Box key={boxType + "-draggable"} boxId="12345" type={boxType} style={additionalStyling}/>
                        </div>
                    )
                })
            }
        </div>
    )
}