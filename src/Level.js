import React from "react";
import {sample} from "./sample";
import {Box} from "./Box";

export function Level(props) {

    // TODO remove hardcoding!!!! everywhere
    return (
        <>
            {
                sample.filter(item => item.level === props.level).map(item =>
                    // 37 = one margin + (border width * 2)
                    <Box key={item.id} boxId={item.id} x={0} y={props.level * 122}/>
                )
            }
        </>
    )
}