import React from "react";
import {HorizontalLine} from "./HorizontalLine";
import {ArrowGenerator} from "./ArrowGenerator";

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
            {/*TODO generate as many lines as there are steps, and allow y-overflow*/}
            <HorizontalLine distance="120"/>
            <HorizontalLine distance="120"/>
            <HorizontalLine distance="120"/>
            <HorizontalLine distance="120"/>
        </div>
    )
}