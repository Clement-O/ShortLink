import {combineReducers} from 'redux'
// Local import
import shortenLink from './shortenLink'
import logIn from './logIn'
import logOut from "./logOut";
import verifyToken from "./verifyToken";
import refreshToken from "./refreshToken";
import getUserLink from './getUserLink'
import redirectLink from "./redirectLink";

export const rootReducer = combineReducers({
    shortenLink,
    logIn,
    logOut,
    verifyToken,
    refreshToken,
    getUserLink,
    redirectLink,
})