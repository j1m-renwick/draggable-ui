import React from "react";

export function HorizontalLine(props) {

    var styling = {
        "borderTop": "2px solid ghostwhite",
        "width": "100%",
        "marginTop": props.distance + "px",
    };

    return <div style={styling}/>
}