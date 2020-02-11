const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                toggled: !state.toggled,
                id: action.id
            };
        default:
            return state
    }
};
export default reducer