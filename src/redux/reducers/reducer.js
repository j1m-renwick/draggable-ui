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
        default:
            return state
    }
};
export default reducer