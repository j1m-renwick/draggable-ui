import React from "react";

export function HorizontalLine(props) {

    var styling = {
        "borderTop": "1px solid darkgrey",
        "width": "100%",
        "marginTop": props.distance + "px",
    };

    return <div style={styling}/>
}