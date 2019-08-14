import {combineReducers} from 'redux'
// Local import
import link from './link'
import auth from './auth'
import user from './user'
import redirect from "./redirect";

export const rootReducer = combineReducers({
    link,
    auth,
    user,
    redirect,
})