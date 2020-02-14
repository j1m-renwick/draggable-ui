import React, {useEffect, useRef} from "react";
import {Grid} from "./Grid";
import {useSelector} from "react-redux";
import {iconDragYDistance, levelsInViewPortCount} from "./config/constants";

export function ViewPort(props) {

    const additionalStyling = {
        "height": (iconDragYDistance * levelsInViewPortCount) + "px"
    };

    const ref = useRef(() => React.createRef());

    const currentLevel = useSelector(state => state.currentLevel);

    useEffect(() => {ref.current.scrollTop = currentLevel * 122}, [currentLevel]);


    return (
        <div ref={ref} className="viewport" style={additionalStyling}>
            <Grid/>
        </div>
    )
}