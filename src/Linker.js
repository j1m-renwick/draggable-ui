import React, {useState} from "react";

export function Linker(props) {

    const image = require("./images/link_16x16.png");

    const [linked, setLinked] = useState(false);

    // NOTE: can use https://codepen.io/sosuke/pen/Pjoqqp to generate appropriate filter criteria
    const genericStyling = {
        "filter": "invert(60%) sepia(40%) saturate(321%) hue-rotate(155deg) brightness(95%) contrast(88%)",
        "paddingRight": "5px"
    };

    const unlinkedStyling = {
        "filter": "invert(35%) sepia(56%) saturate(6026%) hue-rotate(335deg) brightness(86%) contrast(114%)",
        "paddingRight": "5px"
    };

    const linkedStyling = {
        "filter": "invert(86%) sepia(28%) saturate(674%) hue-rotate(35deg) brightness(90%) contrast(83%)",
        "paddingRight": "5px"
    };

    if (props.inactive) {

        return (
            <img alt="kasda" src={image} style={genericStyling}/>
        )
    } else {
        return (
            <img alt="kasda" src={image} style={linked ? linkedStyling : unlinkedStyling}
                 onClick={() => setLinked(!linked)}/>
        )
    }

}