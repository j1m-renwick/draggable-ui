import React from "react";
import {Level} from "./Level";
import {Grid} from "./Grid";
import {levelCount} from "./constants";

export function ViewPort(props) {

    return (
        <div className={"viewport " + props.boxRef}>
            <Grid/>
            {Array(levelCount).fill().map((_, index) => <Level key={index} level={index}/>)}
        </div>
    )
}