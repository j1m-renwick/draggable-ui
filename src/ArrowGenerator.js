import React from "react";
import {ArrowSvg, LineOrientation} from "react-simple-arrows";
import {useSelector} from "react-redux";
import {iconDiameter, iconSpacingYMargin} from "./config/constants";
import uuid from 'uuid';

export function ArrowGenerator(props) {

    const boxLocations = useSelector(state => state.locations);
    const boxes = useSelector(state => state.boxes);
    const hoveredLinkId = useSelector(state => state.hoveredLinkId);
    const focusedBoxId = useSelector(state => state.focusedBoxId);

    const iconRadius = iconDiameter / 2;

    if (boxLocations.length !== 0) {
        return (
            <>
                {
                    boxes.filter(item => item.children.length > 0).map((item, index) => {
                        let arrowSource = boxLocations.find(i => i.id === item.id);
                        return item.children.map((child, index) => {
                            let arrowTarget = boxLocations.find(i => i.id === child);
                            if(arrowSource && arrowTarget) {
                                return <ArrowSvg key={uuid.v4()}
                                                 start={{
                                                     x: arrowSource.x + iconRadius,
                                                     y: arrowSource.y + iconSpacingYMargin + iconRadius
                                                 }}
                                                 end={{
                                                     x: arrowTarget.x + iconRadius,
                                                     y: arrowTarget.y + iconSpacingYMargin
                                                 }}
                                                 orientation={LineOrientation.VERTICAL} highlight={child === hoveredLinkId && item.id === focusedBoxId}/>
                            } else {
                                return <></>
                            }
                        });
                    })
                }
            </>
        )
    } else {
        return <></>
    }
}