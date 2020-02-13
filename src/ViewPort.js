import React from "react";
import {Level} from "./Level";
import {Grid} from "./Grid";
import {levelCount} from "./constants";

export function ViewPort(props) {

    var styling = {
        "width": "782px",
        "height": "782px",
        "borderStyle": "solid",
        "position": "relative",
        "padding": "10px",
        "paddingTop": "0px",
        "margin": "10px",
        "overflowY": "scroll"
    };

    return (
        <div className={props.boxRef} style={styling}>
            <Grid/>
            {Array(levelCount).fill().map((_, index) => <Level level={index}/>)}
        </div>
    )
}