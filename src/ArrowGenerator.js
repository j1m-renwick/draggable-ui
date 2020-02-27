import React from "react";
import {ArrowSvg, LineOrientation} from "@j1m/rsa";
import {useSelector} from "react-redux";
import {iconDiameter, iconSpacingYMargin} from "./config/constants";
import uuid from 'uuid';

export function ArrowGenerator(props) {

    const children = useSelector(state => state.children);
    const boxes = useSelector(state => state.boxes);
    const hoveredLinkId = useSelector(state => state.hoveredLinkId);
    const focusedBoxId = useSelector(state => state.focusedBoxId);

    const iconRadius = iconDiameter / 2;

    if(Object.keys(children).length !== 0) {
        return (
            <>
                {
                    Object.entries(children).filter(item => item.length > 0).map((item, index) => {
                        let entryKey = item[0];
                        let entryValue = item[1];
                        let arrowSource = boxes[entryKey];
                        return entryValue.map((child, index) => {
                            let arrowTarget = boxes[child];
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
                                                 orientation={LineOrientation.VERTICAL}
                                                 highlight={child === hoveredLinkId && entryKey === focusedBoxId}/>
                            } else {
                                return <></>
                            }
                        })
                    })
                }
            </>
        )
    } else {
        return <></>
    }
}