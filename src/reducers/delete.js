const deleteThing = (state=[], action) => {
    let newState = [...state]
    switch(action.type) {
        case 'DELETE_THING':
            return newState.filter(thing => thing !== action.payload)
        default:
            return state
    }
}

export default deleteThing