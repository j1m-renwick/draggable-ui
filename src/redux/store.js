import {createStore} from "redux";
import rootReducer from "./reducers/reducer";

export const store = createStore(rootReducer,
    {
            currentLevel: 0,
            arrows: []},
    // enhancer is for redux dev-tool browser integration
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());