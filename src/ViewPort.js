import React from "react";
import {Level} from "./Level";
import {ArrowGenerator} from "./ArrowGenerator";
import {Grid} from "./Grid";

export function ViewPort(props) {

    var styling = {
        "width": "782px",
        "height": "782px",
        "borderStyle": "solid",
        "position": "relative",
        "padding": "10px",
        "paddingTop": "0px",
        "margin": "10px"
    };

    // TODO map the number of lines / steps to a prop number - or
    return (
        <div className={props.boxRef} style={styling}>
            <Grid/>
            <Level level={0}/>
            <Level level={1}/>
            <Level level={2}/>
            <Level level={3}/>
            <Level level={4}/>
            <Level level={5}/>
        </div>
    )
}