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
            <HorizontalLine distance="60"/>
            <HorizontalLine distance="70"/>
            <HorizontalLine distance="70"/>
            <HorizontalLine distance="70"/>
            <HorizontalLine distance="70"/>
            <HorizontalLine distance="70"/>
        </div>
    )
}