import React from "react";
import {store} from "./redux/store";
import {linkageStarted} from "./redux/actions";
import {useSelector} from "react-redux";
import {get} from "lodash";

export function Linker(props) {

    const image = require("./images/link_16x16.png");

    // TODO refactor?
    const componentLinkedId = useSelector(state => props.inactive ? null : get(state.boxes.find(item => item.id === props.boxId).config, props.reference).linkedId);

    // NOTE: can use https://codepen.io/sosuke/pen/Pjoqqp to generate appropriate filter criteria
    const inactiveStyling = {
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

    function onLinkClicked(e) {
        e.preventDefault();
        store.dispatch(linkageStarted(props.reference));
    }

    if (props.inactive) {

        return (
            <img alt="link-icon" src={image} style={inactiveStyling}/>
        )
    } else {
        return (
            <img alt="link-icon" src={image} style={componentLinkedId === null || componentLinkedId === undefined ? unlinkedStyling : linkedStyling}
                 onContextMenu={onLinkClicked}/>
        )
    }

}