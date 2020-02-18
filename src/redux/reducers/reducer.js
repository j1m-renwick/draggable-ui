import {Direction} from "../../ScrollButton";
import {levelCount, levelsInViewPortCount} from "../../config/constants";

// TODO split reducers and CombineReducers
const reducer = (state, action) => {
    let index;
    switch (action.type) {
        case 'BOX_FOCUSED':
            return Object.assign({}, state, {focusedBoxId: action.id, focusContext: action.focusContext, focusBoxType: action.focusBoxType});
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
        case 'BOX_INITIALISED':
            if (state.locations.findIndex(item => item.id === action.id) === -1) {
                return Object.assign({}, state, {locations: state.locations.concat([{id: action.id, x: action.newX, y: action.newY}])});
            } else {
                return state;
            }
        case 'BOX_CREATED':
            return Object.assign({}, state, {
                locations: state.locations.concat([{id: action.id, x: action.newX, y: action.newY}]),
                boxes: state.boxes.concat({id: action.id, level: action.level, x: action.newX, y: action.newY, type: action.boxType, config: action.config})
                });
        case 'SCROLL_BUTTON_CLICKED':
            return Object.assign({}, state, {currentLevel: action.scrollDirection === Direction.DOWN? Math.min(state.currentLevel + 1, levelCount - levelsInViewPortCount) : Math.max(state.currentLevel - 1, 0)});
        case 'VIEWPORT_SCROLLED':
            return Object.assign({}, state, {currentLevel: action.newCurrentLevel});
        case 'BOX_CONFIG_UPDATED':
            index = state.boxes.findIndex(item => item.id === action.id);
            if (index !== -1) {
                let boxes = [...state.boxes];
                let keyParts = action.key.split(":");
                if (keyParts.length === 1) {
                    boxes[index].config[keyParts[0]] = action.value;
                } else {
                    boxes[index].config[keyParts[0]][keyParts[1]] = action.value;
                }
                return Object.assign({}, state, {boxes: boxes});
            } else {
                return state;
            }
        case 'SAVE_STATE_LOADING_INITIATED':
            return Object.assign({}, state, {boxes: action.savedData});
        default:
            return state
    }
};
export default reducer