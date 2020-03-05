import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers/reducer";
import {install} from "redux-loop";
import {default as installInvariant} from 'redux-immutable-state-invariant';
import React from "react";

// enhancer is for redux dev-tool browser integration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = process.env.NODE_ENV !== 'production' ?
    [installInvariant()] : [];

export const initialState = {
    projectDetails: {
        templateCode: null,
        templateType: null,
        templateVersion: null,
        templateDescription: null,
        templateVersionDescription: null,
    },
    currentLevel: 0,
    linkageInProgress: false,
    linkageReference: null,
    hoveredLinkId: null,
    boxes: {},
    config: {},
    children: {}
}

export const store = createStore(rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware),
        install()
    )
);