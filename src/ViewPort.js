import React from "react";
import {HorizontalLine} from "./HorizontalLine";
import {Step} from "./Step";

export function ViewPort(props) {

    var styling = {
        "width": "782px",
        "height": "782px",
        "borderStyle": "solid",
        "position": "relative",
        "padding": "10px",
        "margin": "10px"
    };

    // TODO map the number of lines / steps to a prop number - or
    return (
        <div className= {props.boxRef} style={styling}>
            <div style={{"position": "absolute", "display": "flex", "flexDirection": "column","width": "auto", "right": "10px", "left": "10px"}}>
                <HorizontalLine distance="60"/>
                <HorizontalLine distance="70"/>
                <HorizontalLine distance="70"/>
                <HorizontalLine distance="70"/>
                <HorizontalLine distance="70"/>
                <HorizontalLine distance="70"/>
            </div>
            <Step level={0} arrowRegisterFcn={props.arrowRegisterFcn}/>
            <Step level={1} arrowRegisterFcn={props.arrowRegisterFcn}/>
            <Step level={2} arrowRegisterFcn={props.arrowRegisterFcn}/>
            <Step level={3} arrowRegisterFcn={props.arrowRegisterFcn}/>
            <Step level={4} arrowRegisterFcn={props.arrowRegisterFcn}/>
            <Step level={5} arrowRegisterFcn={props.arrowRegisterFcn}/>
        </div>
    )
}