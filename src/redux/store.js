import {createStore} from "redux";
import rootReducer from "./reducers/reducer";

export const store = createStore(rootReducer,
    {
            currentLevel: 0,
            arrows: [
        // {
        //     "id": "9890c7a3-033f-4d13-9176-27b72915682a",
        //     x: 20,
        //     y: 40
        // },
        //     {
        //         "id": "5c6e4997-ab58-442a-be0b-ca91eb18d63b",
        //         x: 40,
        //         y: 100
        //     }
        ]},
    // enhancer is for redux dev-tool browser integration
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());