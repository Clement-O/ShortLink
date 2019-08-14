// local import
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "../actions/auth";

const initialState = {
    isAuthenticating: false,
    isAuthenticated: !!localStorage.getItem('token_access'),
    isDisconnecting: false,
    isDisconnected: !localStorage.getItem('token_access')
}

export default function auth(state=initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state,
                isAuthenticating: true,
                isAuthenticated: false,
                isDisconnecting: false,
                isDisconnected: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: true,
                isDisconnecting: false,
                isDisconnected: false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                isDisconnecting: false,
                isDisconnected: false,
                errorMessage: action.message
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: true,
                isDisconnecting: true,
                isDisconnected: false,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                isDisconnecting: false,
                isDisconnected: true,
            }
        default:
            return state
    }
}