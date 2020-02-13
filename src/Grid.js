import React from "react";
import {HorizontalLine} from "./HorizontalLine";
import {ArrowGenerator} from "./ArrowGenerator";
import {levelCount, levelHeight} from "./constants";

export function Grid(props) {

    return (
        <div className="grid">
            <ArrowGenerator/>
            {Array(levelCount).fill().map((_, index) => <HorizontalLine key={index} distance={levelHeight}/>)};
        </div>
    )
}