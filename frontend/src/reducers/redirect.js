// Local import
import {REDIRECT_LINK_REQUEST, REDIRECT_LINK_SUCCESS, REDIRECT_LINK_ERROR} from "../actions/redirect";

const initialState = {
    isRedirecting: false,
    isRedirected: false
}

export default function redirect(state=initialState, action) {
    switch (action.type) {
        case REDIRECT_LINK_REQUEST:
            return {
                ...state,
                isRedirecting: true,
                isRedirected: false
            }
        case REDIRECT_LINK_SUCCESS:
            return {
                ...state,
                isRedirecting: false,
                isRedirected: true,
                full_link: action.full_link,
                short_link: action.short_link
            }
        case REDIRECT_LINK_ERROR:
            return {
                ...state,
                isRedirecting: false,
                isRedirected: false,
                errorMessage: action.message
            }
        default:
            return state
    }
}