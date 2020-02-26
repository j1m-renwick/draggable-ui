import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers/reducer";
import {install} from "redux-loop";
// import {def} from 'redux-immutable-state-invariant';

// enhancer is for redux dev-tool browser integration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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

        applyMiddleware(require('redux-immutable-state-invariant').default()),
        install()));