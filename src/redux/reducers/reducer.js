import {Direction} from "../../buttons/ScrollButton";
import {defaultIconSpacingXMargin, iconDragYDistance, levelCount, levelsInViewPortCount} from "../../constants/layoutConstants";
import {Cmd, loop} from "redux-loop";
import {linkageFinished, dataLoaded} from "../actions";
import {get, cloneDeep} from "lodash";
import {newBoxData} from "../../constants/NewBoxTypeInstances";
import {initialState} from "../store";

// TODO split reducers and CombineReducers
const reducer = (state, action) => {
    let index;
    let boxes;
    let config;
    let children;
    switch(action.type) {
        case 'BOX_FOCUSED':
            if(state.linkageInProgress) {
                if(action.focusContext === "VIEW_PORT" && (state.focusedBoxId !== action.id)) {
                    // TODO do not allow linkage if the box to be linked is not on a higher level than the box the link has originated from -> modal message
                    // find config link item for the previously focused box
                    let previouslyFocusedBoxConfig = state.config[state.focusedBoxId];
                    let previouslyFocusedLinkItem = get(previouslyFocusedBoxConfig, state.linkageReference);
                    // add/set the previously focused box children to the new box focus id
                    let previouslyFocusedBoxChildren = [...state.children[state.focusedBoxId]];
                    index = previouslyFocusedBoxChildren.findIndex(item => item === previouslyFocusedLinkItem.linkedId);
                    if(index !== -1) {
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
        case 'BOX_UNFOCUSED':
            let newState = Object.assign({}, state, {focusedBoxId: undefined, focusBoxType: undefined, focusContext: undefined});
            if (state.linkageInProgress) {
                return loop(newState, Cmd.action(linkageFinished()));
            } else {
                return newState;
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
        case 'BOX_DELETED':
            boxes = {...state.boxes};
            delete boxes[state.focusedBoxId];
            children = {};
            Object.entries(state.children).forEach(entry => {
                if(entry[0] !== state.focusedBoxId) {
                    children[entry[0]] = entry[1].filter(item => item !== state.focusedBoxId);
                }
            });
            config = {};
            Object.entries(state.config).forEach(entry => {
                if(entry[0] !== state.focusedBoxId) {
                    let newConfig = cloneDeep(entry[1]);
                    Object.values(newConfig.answers).forEach(value => {
                        if (value.linkedId === state.focusedBoxId) {
                            delete value.linkedId;
                        }
                    });
                    config[entry[0]] = newConfig;
                }
            });
            return Object.assign({}, state, {boxes: boxes, config: config, children: children, focusedBoxId: undefined, focusBoxType: undefined, focusContext: undefined});
        case 'SCROLL_BUTTON_CLICKED':
            return Object.assign({}, state, {currentLevel: action.scrollDirection === Direction.DOWN ? Math.min(state.currentLevel + 1, levelCount - levelsInViewPortCount) : Math.max(state.currentLevel - 1, 0)});
        case 'VIEWPORT_SCROLLED':
            return Object.assign({}, state, {currentLevel: action.newCurrentLevel});
        case 'BOX_CONFIG_UPDATED':
            config = cloneDeep(state.config);
            get(config[action.id], action.key).value = action.value;
            return Object.assign({}, state, {config: config});
        case 'LOADING_INITIATED':
            let resetState = cloneDeep(initialState);
            return loop(resetState, Cmd.action(dataLoaded(action.savedData)));
        case 'DATA_LOADED':
            return Object.assign({}, state, {
                projectDetails: action.savedData.projectDetails,
                boxes: action.savedData.boxes,
                children: action.savedData.children,
                config: action.savedData.config
            });
        case 'LINKAGE_STARTED':
            return Object.assign({}, state, {linkageInProgress: true, linkageReference: action.reference});
        case 'LINKAGE_FINISHED':
            return Object.assign({}, state, {linkageInProgress: false, linkageReference: null});
        case 'LINK_HOVER_STARTED':
            return Object.assign({}, state, {hoveredLinkId: action.linkedId});
        case 'LINK_HOVER_FINISHED':
            return Object.assign({}, state, {hoveredLinkId: null});
        case 'TEMPLATE_DETAILS_UPDATED':
            let projectDetails = {...state.projectDetails};
            projectDetails[action.key] = action.value;
            return Object.assign({}, state, {projectDetails: projectDetails});
        default:
            return state
    }
};
export default reducer