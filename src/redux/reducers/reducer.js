import {Direction} from "../../ScrollButton";
import {defaultIconSpacingXMargin, iconDragYDistance, levelCount, levelsInViewPortCount} from "../../config/constants";
import {Cmd, loop} from "redux-loop";
import {linkageFinished} from "../actions";
import {get, cloneDeep} from "lodash";
import {newBoxData} from "../../config/BoxTypes";

// TODO split reducers and CombineReducers
const reducer = (state, action) => {
    let index;
    let boxes;
    let config;
    let children;
    switch (action.type) {
        case 'BOX_FOCUSED':
            if (state.linkageInProgress) {
                if(action.focusContext === "VIEW_PORT" && (state.focusedBoxId !== action.id)) {
                    // find config link item for the previously focused box
                    let previouslyFocusedBoxConfig = state.config[state.focusedBoxId];
                    let previouslyFocusedLinkItem = get(previouslyFocusedBoxConfig, state.linkageReference);
                    // add/set the previously focused box children to the new box focus id
                    let previouslyFocusedBoxChildren = [...state.children[state.focusedBoxId]];
                    index = previouslyFocusedBoxChildren.findIndex(item => item === previouslyFocusedLinkItem.linkedId);
                    if (index !== -1) {
                        previouslyFocusedBoxChildren[index] = action.id;
                    } else {
                        previouslyFocusedBoxChildren.push(action.id)
                    }
                    let newChildrenState = {...state.children};
                    newChildrenState[state.focusedBoxId] = previouslyFocusedBoxChildren;

                    // set the config link item to the newly focused box id
                    let newConfigState = cloneDeep(state.config);
                    let configItemToUpdate = get(newConfigState[state.focusedBoxId], state.linkageReference);
                    configItemToUpdate.linkedId = action.id;

                    // set state and dispatch 'linkage finished' action
                    return loop(Object.assign({}, state, {
                        config: newConfigState,
                        children: newChildrenState
                    }), Cmd.action(linkageFinished()));
                } else {
                    return state;
                }
            } else {
                return Object.assign({}, state, {
                    focusedBoxId: action.id,
                    focusContext: action.focusContext,
                    // TODO remove focusBoxType from state
                    focusBoxType: action.focusBoxType
                });
            }
        case 'BOX_DRAGGED':
            boxes = {...state.boxes};
            let boxToUpdate = cloneDeep(boxes[action.id]);
            boxToUpdate.x = action.newX;
            boxToUpdate.y = action.newY;
            boxes[action.id] = boxToUpdate;
            return Object.assign({}, state, {boxes: boxes});
        case 'BOX_CREATED':
            boxes = {...state.boxes};
            children = {...state.children};
            config = {...state.config};

            // set all new box data
            let creationData = newBoxData(state.focusBoxType);
            config[creationData.id] = creationData.config;
            children[creationData.id] = creationData.children;
            boxes[creationData.id] = creationData.box;

            // get all boxes on the current level and set the new box x and y values accordingly
            let newY = state.currentLevel * iconDragYDistance;
            let newX = Object.values(boxes).filter(item => item.y === newY).reduce((max, next) => Math.max(max, next.x), -defaultIconSpacingXMargin);

            creationData.box.x = newX + defaultIconSpacingXMargin;
            creationData.box.y = newY;

            boxes[creationData.id] = creationData.box;
            return Object.assign({}, state, {
                boxes: boxes,
                children: children,
                config: config
            });
        case 'SCROLL_BUTTON_CLICKED':
            return Object.assign({}, state, {currentLevel: action.scrollDirection === Direction.DOWN? Math.min(state.currentLevel + 1, levelCount - levelsInViewPortCount) : Math.max(state.currentLevel - 1, 0)});
        case 'VIEWPORT_SCROLLED':
            return Object.assign({}, state, {currentLevel: action.newCurrentLevel});
        case 'BOX_CONFIG_UPDATED':
            config = cloneDeep(state.config);
            get(config[action.id], action.key).value = action.value;
            return Object.assign({}, state, {config: config});
        case 'LOADING_INITIATED':
            return Object.assign({}, state, {boxes: action.savedData.boxes, children: action.savedData.children, config: action.savedData.config});
        case 'LINKAGE_STARTED':
            return Object.assign({}, state, {linkageInProgress: true, linkageReference: action.reference});
        case 'LINKAGE_FINISHED':
            return Object.assign({}, state, {linkageInProgress: false, linkageReference: null});
        case 'LINK_HOVER_STARTED':
            return Object.assign({}, state, {hoveredLinkId: action.linkedId});
        case 'LINK_HOVER_FINISHED':
            return Object.assign({}, state, {hoveredLinkId: null});
        default:
            return state
    }
};
export default reducer