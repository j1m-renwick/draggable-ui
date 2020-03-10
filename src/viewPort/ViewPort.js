import React, {useEffect} from "react";
import {Grid} from "./Grid";
import {useSelector} from "react-redux";
import {
    iconDiameter,
    iconDragYDistance,
    iconWidthsInViewPortCount,
    levelsInViewPortCount
} from "../constants/layoutConstants";
import {debounce} from 'lodash';
import {store} from "../redux/store";
import {viewportScrolled} from "../redux/actions";

export function ViewPort(props) {

    const LEVEL_SNAP_CUTOFF_PERCENTAGE = 0.5;
    const currentLevel = useSelector(state => state.currentLevel);
    const linkageInProgress = useSelector(state => state.linkageInProgress);

    useEffect(() => {props.id.current.scrollTop = currentLevel * iconDragYDistance}, [currentLevel, props.id]);

    const additionalStyling = {
        "height": (iconDragYDistance * levelsInViewPortCount) + "px",
        "backgroundColor": linkageInProgress? "pink": "white",
        // TODO 10 + 3 is the padding and border width on each side of the view port - remove this hardcoding
        "width": (iconDiameter * iconWidthsInViewPortCount) + ((10+3)*2)
    };

    // snap to the correct level based on scroll location
    function onScrollFinished() {
        let value = props.id.current.scrollTop / iconDragYDistance;
        let decimalValue = value % 1;
        store.dispatch(viewportScrolled(decimalValue > LEVEL_SNAP_CUTOFF_PERCENTAGE ? Math.ceil(value): Math.floor(value)));
    }


    return (
        <div ref={props.id} className="viewport" style={additionalStyling} onScroll={debounce(onScrollFinished, 100)}>
            <Grid/>
        </div>
    )
}