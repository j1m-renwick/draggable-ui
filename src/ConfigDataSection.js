import React from "react";
import {useSelector} from "react-redux";
import {iconDragYDistance, levelsInViewPortCount} from "./config/constants";
import {ViewPortConfigData} from "./ViewPortConfigData";
import {BoxTypeBarConfigData} from "./BoxTypeBarConfigData";


export function ConfigDataSection(props) {

    const additionalStyling = {
        "height": (iconDragYDistance * levelsInViewPortCount) + "px"
    };

    const context = useSelector(state => state.focusContext);
    const focusedId = useSelector(state => state.focusedBoxId);
    const focusBoxType = useSelector(state => state.focusBoxType);

    function renderConfigData() {
       switch(context) {
           case "VIEW_PORT":
               return <ViewPortConfigData focusedId={focusedId} focusBoxType={focusBoxType}/>;
           case "BOX_TYPE_BAR":
               return <BoxTypeBarConfigData focusBoxType={focusBoxType}/>;
           default:
               return <></>
       }
    }

    return (
        <div key={focusedId} className="config" style={additionalStyling}>
            {renderConfigData()}
        </div>
    );
}