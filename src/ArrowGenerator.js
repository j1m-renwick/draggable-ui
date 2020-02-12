import React from "react";
import {sample} from "./sample";
import {ArrowSvg, LineOrientation} from "react-simple-arrows";
import {useSelector} from "react-redux";

export function ArrowGenerator(props) {

    const arrows = useSelector(state => state.arrows);

    return (
        <>
            {
                sample.filter(item => item.children !== undefined).map(item => {
                    console.dir(arrows);
                    let arrowSource = arrows.find(i => i.id === item.id);
                        return item.children.map(child => {
                            let arrowTarget = arrows.find(i => i.id === child.childId);
                            console.log(arrowSource.x);
                            console.log(arrowSource.y);
                            console.log(arrowTarget.x);
                            console.log(arrowTarget.y);
                                return <ArrowSvg start={{x: arrowSource.x + 25, y: arrowSource.y + 50}}
                                                 end={{x: arrowTarget.x + 25, y: arrowTarget.y + 45}}
                                                 orientation={LineOrientation.VERTICAL}/>
                        });
                }
            )
            }
        </>
    )
}