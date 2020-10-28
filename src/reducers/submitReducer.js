const submitReducer = (state=[], action) => {
    switch(action.type){
        case 'SUBMIT_TEXT':
            return [...state], action.payload
        default:
            return state
        }
}

export default submitReducer