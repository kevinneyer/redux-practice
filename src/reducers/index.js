import { combineReducers } from 'redux'
import counterReducer from './counter'
import textReducer from './text'
import submitReducer from './submitReducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    text: textReducer,
    things: submitReducer
}) 

export default rootReducer
