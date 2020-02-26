import React from "react";
import {HorizontalLine} from "./HorizontalLine";
import {ArrowGenerator} from "./ArrowGenerator";
import {levelCount, levelHeight} from "./config/constants";
import {Box} from "./Box";
import {useSelector} from "react-redux";

export function Grid(props) {

    const boxes = useSelector(state => state.boxes);

    return (
        <div className="grid">
            <ArrowGenerator/>
            {Array(levelCount).fill().map((_, index) => <HorizontalLine key={index} distance={levelHeight}/>)}
            {Object.values(boxes).map((item, index) => <Box key={item.id} type={item.type} boxId={item.id} x={item.x} y={item.y}/>)}
        </div>
    )
}