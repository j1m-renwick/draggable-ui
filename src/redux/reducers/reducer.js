import {Direction} from "../../ScrollButton";
import {levelCount, levelsInViewPortCount} from "../../config/constants";

// TODO split reducers and CombineReducers
const reducer = (state, action) => {
    let index;
    switch (action.type) {
        case 'BOX_FOCUSED':
            return Object.assign({}, state, {focusedBoxId: action.id});
        case 'BOX_DRAGGED':
            index = state.arrows.findIndex(item => item.id === action.id);
            let newArrow = {id: action.id, x: action.newX, y: action.newY};
            let arrows;
            if (index !== -1) {
                arrows = [...state.arrows];
                arrows[index] = newArrow;
            } else {
                arrows = state.arrows.concat(newArrow);
            }
            return Object.assign({}, state, {arrows: arrows});
        case 'BOX_INITIALISED':
            if (state.arrows.findIndex(item => item.id === action.id) === -1) {
                return Object.assign({}, state, {arrows: state.arrows.concat({id: action.id, x: action.newX, y: action.newY})});
            } else {
                return state;
            }
        case 'BOX_CREATED':
            return Object.assign({}, state, {
                arrows: state.arrows.concat({id: action.id, x: action.newX, y: action.newY}),
                boxes: state.boxes.concat({id: action.id, level: action.level, x: action.newX, y: action.newY, config: action.config})
                });
        case 'SCROLL_BUTTON_CLICKED':
            return Object.assign({}, state, {currentLevel: action.scrollDirection === Direction.DOWN? Math.min(state.currentLevel + 1, levelCount - levelsInViewPortCount) : Math.max(state.currentLevel - 1, 0)});
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