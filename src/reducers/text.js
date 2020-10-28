let initialState =  ''

const textReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TEXT':
            return state = action.payload
        default:
            return state
    }
}

export default textReducer