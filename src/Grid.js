import React from "react";
import {HorizontalLine} from "./HorizontalLine";
import {ArrowGenerator} from "./ArrowGenerator";
import {levelCount, levelHeight} from "./config/constants";
import {Level} from "./Level";

export function Grid(props) {

    return (
        <div className="grid">
            <ArrowGenerator/>
            {Array(levelCount).fill().map((_, index) => <HorizontalLine key={index} distance={levelHeight}/>)}
            {Array(levelCount).fill().map((_, index) => <Level key={index} level={index}/>)}
        </div>
    )
}