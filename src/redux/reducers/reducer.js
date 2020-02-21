import {Direction} from "../../ScrollButton";
import {levelCount, levelsInViewPortCount} from "../../config/constants";
import {Cmd, loop} from "redux-loop";
import {linkageFinished} from "../actions";
import {get} from "lodash";

// TODO split reducers and CombineReducers
const reducer = (state, action) => {
    let index;
    switch (action.type) {
        case 'BOX_FOCUSED':
            if (state.linkageInProgress) {
                if(action.focusContext === "VIEW_PORT" && (state.focusedBoxId !== action.id)) {
                    let boxes = [...state.boxes];
                    // find box that was previously focused
                    let previouslyFocusedBox = boxes.find(item => item.id === state.focusedBoxId);
                    // find config link item for the previously focused item
                    let previouslyFocusedLinkItem = get(previouslyFocusedBox.config, state.linkageReference);
                    // add/set the previously focused box children to the new box focus id
                    let index = previouslyFocusedBox.children.findIndex(item => item === previouslyFocusedLinkItem.linkedId);
                    if (index !== -1) {
                        previouslyFocusedBox.children[index] = action.id;
                    } else {
                        previouslyFocusedBox.children.push(action.id)
                    }
                    // set the config link item to the newly focused box id
                    previouslyFocusedLinkItem.linkedId = action.id;
                    // set state and dispatch 'linkage finished' action
                    return loop(Object.assign({}, state, {
                        boxes: boxes
                    }), Cmd.action(linkageFinished()));
                } else {
                    return state;
                }
            } else {
                return Object.assign({}, state, {
                    focusedBoxId: action.id,
                    focusContext: action.focusContext,
                    focusBoxType: action.focusBoxType
                });
            }
        case 'BOX_DRAGGED':
            index = state.locations.findIndex(item => item.id === action.id);
            let newBoxLocation = {id: action.id, x: action.newX, y: action.newY};
            let boxLocations;
            if (index !== -1) {
                boxLocations = [...state.locations];
                boxLocations[index] = newBoxLocation;
            } else {
                boxLocations = state.locations.concat(newBoxLocation);
            }
            return Object.assign({}, state, {locations: boxLocations});
        case 'BOX_LOCATION_SET':
            if (state.locations.findIndex(item => item.id === action.id) === -1) {
                return Object.assign({}, state, {locations: state.locations.concat([{id: action.id, x: action.newX, y: action.newY}])});
            } else {
                return state;
            }
        case 'BOX_CREATED':
            return Object.assign({}, state, {
                locations: state.locations.concat([{id: action.json.id, x: action.newX, y: action.newY}]),
                boxes: state.boxes.concat(action.json)
                });
        case 'SCROLL_BUTTON_CLICKED':
            return Object.assign({}, state, {currentLevel: action.scrollDirection === Direction.DOWN? Math.min(state.currentLevel + 1, levelCount - levelsInViewPortCount) : Math.max(state.currentLevel - 1, 0)});
        case 'VIEWPORT_SCROLLED':
            return Object.assign({}, state, {currentLevel: action.newCurrentLevel});
        case 'BOX_CONFIG_UPDATED':
            index = state.boxes.findIndex(item => item.id === action.id);
            if (index !== -1) {
                let boxes = [...state.boxes];
                get(boxes[index].config, action.key).value = action.value;
                return Object.assign({}, state, {boxes: boxes});
            } else {
                return state;
            }
        case 'SAVE_STATE_LOADING_INITIATED':
            return Object.assign({}, state, {boxes: action.savedData});
        case 'LINKAGE_STARTED':
            return Object.assign({}, state, {linkageInProgress: true, linkageReference: action.reference});
        case 'LINKAGE_FINISHED':
            return Object.assign({}, state, {linkageInProgress: false, linkageReference: null});
        default:
            return state
    }
};
export default reducer