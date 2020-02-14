import {Direction} from "../../ScrollButton";
import {levelCount, levelsInViewPortCount} from "../../config/constants";

// TODO split reducers and CombineReducers
const reducer = (state, action) => {
    switch (action.type) {
        case 'BOX_FOCUSED':
            return Object.assign({}, state, {focusedBoxId: action.id});
        case 'BOX_DRAGGED':
            let found = state.arrows.findIndex(item => item.id === action.id) !== -1;
            let arrows;
            if (found) {
                arrows = state.arrows.map(item => {
                    if (item.id === action.id) {
                        return {id: item.id, x: action.newX, y: action.newY};
                    } else {
                        return item;
                    }
                    });
            } else {
                arrows = state.arrows.concat({id: action.id, x: action.newX, y: action.newY});
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
            let index = state.boxes.findIndex(item => item.id === action.id);
            if (index !== -1) {
                let boxes = [...state.boxes];
                boxes[action.key] = action.value;
                return Object.assign({}, state, {boxes: boxes});
            } else {
                return state;
            }
        default:
            return state
    }
};
export default reducer