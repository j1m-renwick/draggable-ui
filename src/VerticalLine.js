import React from "react";

export function VerticalLine(props) {

    var styling = {
        "borderLeft": "2px solid ghostwhite",
        "height": "inherit",
        "marginLeft": props.distance + "px",
    };

    return <div style={styling}/>
}