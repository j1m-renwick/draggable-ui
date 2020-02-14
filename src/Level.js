import React from "react";
import {Box} from "./Box";
import {iconDragYDistance} from "./config/constants";
import {useSelector} from "react-redux";

export function Level(props) {

    const boxes = useSelector(state => state.boxes);

    return (
        <>
            {
                boxes.filter(item => item.level === props.level).map(item =>
                    <Box key={item.id} boxId={item.id} x={0} y={props.level * iconDragYDistance}/>
                )
            }
        </>
    )
}