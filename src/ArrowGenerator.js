import React from "react";
import {sample} from "./sample";
import {ArrowBetweenDivs, ArrowAnchorPlacement, LineOrientation} from "react-simple-arrows";

export function ArrowGenerator(props) {

    return (
        <>
            {/*{*/}
            {/*    sample.filter(item => item.children !== undefined).map(item =>*/}
                    <ArrowBetweenDivs
                        from={{ id: "9890c7a3-033f-4d13-9176-27b72915682a", placement: ArrowAnchorPlacement.BOTTOM }}
                        to={{ id: '5c6e4997-ab58-442a-be0b-ca91eb18d63b', placement: ArrowAnchorPlacement.TOP }}
                        orientation={LineOrientation.VERTICAL}
                    />
            {/*    )*/}
            {/*}*/}
        </>
    )
}