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
                    let arrowSource = arrows.find(i => i.id === item.id);
                    // console.dir(arrowSource);
                        return item.children.map((child, index) => {
                            let arrowTarget = arrows.find(i => i.id === child.childId);
                            if (arrowSource && arrowTarget) {
                                console.log(arrowSource.x);
                                console.log(arrowSource.y);
                                console.log(arrowTarget.x);
                                console.log(arrowTarget.y);
                                return <ArrowSvg key={item.id + index}
                                                 start={{x: arrowSource.x + 25, y: arrowSource.y + 35 + 25}}
                                                 end={{x: arrowTarget.x + 25, y:arrowTarget.y + 35}}
                                                 orientation={LineOrientation.VERTICAL}/>
                            }
                        });
                }
            )
            }
        </>
    )
}