import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers/reducer";
import {install} from "redux-loop";
import {default as installInvariant} from 'redux-immutable-state-invariant';

// enhancer is for redux dev-tool browser integration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = process.env.NODE_ENV !== 'production' ?
    [installInvariant()] : [];

export const store = createStore(rootReducer,
    {
            currentLevel: 0,
            linkageInProgress: false,
            linkageReference: null,
            hoveredLinkId: null,
            boxes: {},
            config: {},
            children: {}
            },
    composeEnhancers(
        applyMiddleware(...middleware),
        install()
    )
);