import {combineReducers} from 'redux';
import {studentPostReducer} from './studentPostReducer'
export const rootReducer=combineReducers({
    stuPostReducer:studentPostReducer
})