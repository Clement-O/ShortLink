import {combineReducers} from 'redux'
// Local import
import link from './link'
import auth from './auth'

export const rootReducer = combineReducers({
    link,
    auth,
})