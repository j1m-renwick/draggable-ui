import React from "react";
import {BoxTypeClasses} from "./config/constants";
import Badge from "react-bootstrap/Badge";


export function BoxTypeBarConfigData(props) {

    return (
        <>
            <h4 className="italicise">{props.focusBoxType}</h4>
            <br/>
            {
                Object.entries(BoxTypeClasses[props.focusBoxType]).map(item => {
                    return (
                        <h6 key={item[0]} className="capitalise">{item[0]}
                            <Badge style={{"float": "right"}} variant="secondary">{item[1]["input"]}</Badge>
                        </h6>
                    )
                })
            }
        </>
    )
}