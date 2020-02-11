import React from "react";
import {HorizontalLine} from "./HorizontalLine";
import {sample} from "./sample";
import {Box} from "./Box";

export function Step(props) {

    // TODO remove hardcoding
    return (
        <>
            {
                sample.filter(item => item.level === props.level).map(item =>
                         <Box arrowRegisterFcn={props.arrowRegisterFcn} boxId={item.id} x={0} y={props.level * 22}/>
                )
            }
        </>
    )
}