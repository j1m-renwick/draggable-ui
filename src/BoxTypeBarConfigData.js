import React from "react";
import {BoxTypeClasses} from "./config/constants";
import Badge from "react-bootstrap/Badge";
import {Linker} from "./Linker";


export function BoxTypeBarConfigData(props) {

    const flexContainerStyling = {
        "display": "flex", "justifyContent": "space-between", "marginBottom": "5px"
    };

    return (
        <>
            <h4 className="italicise">{props.focusBoxType}</h4>
            <br/>
            {
                Object.entries(BoxTypeClasses[props.focusBoxType]).map(item => {
                    return (
                        <div key={item[0]} style={flexContainerStyling}>
                            <div style={{"display": "flex"}}>
                            {item[1].linkable === true ? <Linker inactive={true}/> : <></>}
                                <h6 style={{"marginBottom": "initial"}} className="capitalise">{item[0]}</h6>
                            </div>
                                <Badge variant="secondary">{item[1]["input"]}</Badge>
                        </div>
                    )
                })
            }
        </>
    )
}