const reducer = (state, action) => {
    switch (action.type) {
        case 'BOX_FOCUSED':
            return Object.assign({}, state, {focusedBoxId: action.id});
        case 'BOX_DRAGGED':
            console.log("TRIGGERED");
            let found = state.arrows.findIndex(item => item.id === action.id) !== -1;
            // console.log(state.arrows.find(item => item.id === action.id));
            let arrows;
            if (found) {
                console.log("FOUND!");
                arrows = state.arrows.map(item => {
                    if (item.id === action.id) {
                        return {id: item.id, x: action.newX, y: action.newY}
                    } else {
                        return item;
                    }
                    });
            } else {
                console.log("NOT FOUND!");
                arrows = state.arrows.concat({id: action.id, x: action.newX, y: action.newY});
            }
            return Object.assign({}, state, {arrows: arrows});
        default:
            return state
    }
};
export default reducer