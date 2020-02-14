import React from "react";
import {ArrowSvg, LineOrientation} from "react-simple-arrows";
import {useSelector} from "react-redux";
import {iconDiameter, iconSpacingYMargin} from "./config/constants";

export function ArrowGenerator(props) {

    const boxLocations = useSelector(state => state.locations);
    const boxes = useSelector(state => state.boxes);

    const iconRadius = iconDiameter / 2;

    if (boxLocations.length !== 0) {
        return (
            <>
                {
                    boxes.filter(item => item.children !== undefined).map((item, index) => {
                        let arrowSource = boxLocations.find(i => i.id === item.id);
                        return item.children.map((child, index) => {
                            let arrowTarget = boxLocations.find(i => i.id === child.childId);
                            if(arrowSource && arrowTarget) {
                                return <ArrowSvg key={item.id + index}
                                                 start={{
                                                     x: arrowSource.x + iconRadius,
                                                     y: arrowSource.y + iconSpacingYMargin + iconRadius
                                                 }}
                                                 end={{
                                                     x: arrowTarget.x + iconRadius,
                                                     y: arrowTarget.y + iconSpacingYMargin
                                                 }}
                                                 orientation={LineOrientation.VERTICAL}/>
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