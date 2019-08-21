// Local import
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/logIn";

const initialState = {
    isAuthenticating: false,
    isAuthenticated: !!localStorage.getItem('token_access'),
}

export default function logIn(state=initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state,
                isAuthenticating: true,
                isAuthenticated: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: true,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                errorMessage: action.message
            }
        default:
            return state
    }
}