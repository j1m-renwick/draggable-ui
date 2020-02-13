import React from "react";
import {HorizontalLine} from "./HorizontalLine";
import {ArrowGenerator} from "./ArrowGenerator";
import {levelCount, levelHeight} from "./constants";

export function Grid(props) {

    return (
        <div style={{
            "position": "absolute",
            "display": "flex",
            "flexDirection": "column",
            "width": "auto",
            "right": "10px",
            "left": "10px"
        }}>
            <ArrowGenerator/>
            {Array(levelCount).fill().map(() => <HorizontalLine distance={levelHeight}/>)};
        </div>
    )
}