import { combineReducers } from 'redux'
import counterReducer from './counter'
import textReducer from './text'

const rootReducer = combineReducers({
    counter: counterReducer,
    text: textReducer
}) 

export default rootReducer
