import { combineReducers } from 'redux'
import counterReducer from './counter'
import textReducer from './text'
import submitReducer from './submitReducer'
import timerReducer from './timer'

const rootReducer = combineReducers({
    counter: counterReducer,
    text: textReducer,
    things: submitReducer,
    timer: timerReducer
}) 

export default rootReducer
