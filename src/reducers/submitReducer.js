const submitReducer = (state=[], action) => {
    let newState = [...state]
    switch(action.type){
        case 'SUBMIT_TEXT':
            return [...state, action.payload]
        case 'DELETE_THING':
            return newState.filter(thing => thing !== action.payload)
        default:
            return state
        }
}

export default submitReducer