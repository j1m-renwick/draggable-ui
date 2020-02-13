import React from "react";
import {sample} from "./sample";
import {Box} from "./Box";
import {iconDragYDistance} from "./constants";

export function Level(props) {

    return (
        <>
            {
                sample.filter(item => item.level === props.level).map(item =>
                    <Box key={item.id} boxId={item.id} x={0} y={props.level * iconDragYDistance}/>
                )
            }
        </>
    )
}