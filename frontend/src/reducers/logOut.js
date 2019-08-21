// Local import
import {LOGOUT_REQUEST, LOGOUT_SUCCESS} from "../actions/logOut";

const initialState = {
    isDisconnecting: false,
    isDisconnected: !localStorage.getItem('token_access')
}

export default function logOut(state=initialState, action) {
    switch (action.type) {
        case LOGOUT_REQUEST:
            return {
                ...state,
                isDisconnecting: true,
                isDisconnected: false,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isDisconnecting: false,
                isDisconnected: true,
            }
        default:
            return state
    }
}