// local import
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "../actions/auth";

const initialState = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('token_access')
}

export default function auth(state=initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state,
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: true,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
            }
        default:
            return state
    }
}