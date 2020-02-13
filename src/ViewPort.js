import React, {useEffect, useRef} from "react";
import {Grid} from "./Grid";
import {useSelector} from "react-redux";

export function ViewPort(props) {

    const ref = useRef(() => React.createRef());

    const currentLevel = useSelector(state => state.currentLevel);

    useEffect(() => {ref.current.scrollTop = currentLevel * 122}, [currentLevel]);


    return (
        <div ref={ref} className="viewport">
            <Grid/>
        </div>
    )
}