import React from "react";
import {store} from "../redux/store";
import {linkageStarted, linkHoverFinished, linkHoverStarted} from "../redux/actions";
import {useSelector} from "react-redux";
import {get} from "lodash";
import image from '../images/link_16x16.png';

export function Linker(props) {

    // TODO refactor? (refactor all selectors to be more efficient)
    const componentLinkedId = useSelector(state => props.inactive ? null : get(state.config[props.boxId], props.reference).linkedId);

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

    function onMouseHoveredOver() {
        store.dispatch(linkHoverStarted(props.linkedId));
    }

    function onMouseHoveredOff() {
        store.dispatch(linkHoverFinished(props.linkedId));
    }

    if (props.inactive) {

        return (
            <img alt="link-icon" src={image} style={inactiveStyling}/>
        )
    } else {
        return (
            <img alt="link-icon" src={image} style={componentLinkedId === null || componentLinkedId === undefined ? unlinkedStyling : linkedStyling}
                 onContextMenu={onLinkClicked} onMouseOver={onMouseHoveredOver} onMouseOut={onMouseHoveredOff}/>
        )
    }

}