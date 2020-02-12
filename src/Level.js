import React from "react";
import {sample} from "./sample";
import {Box} from "./Box";

export function Level(props) {

    // TODO remove hardcoding
    return (
        <>
            {
                sample.filter(item => item.level === props.level).map(item =>
                    <Box key={item.id} boxId={item.id} x={0} y={props.level * 22}/>
                )
            }
        </>
    )
}