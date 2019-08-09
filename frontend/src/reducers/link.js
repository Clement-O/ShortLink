// Local import
import {SHORTEN_LINK_REQUEST, SHORTEN_LINK_SUCCESS, SHORTEN_LINK_ERROR} from "../actions/link";

const initialState = {
    full_link: '',
    short_link: '',
    isShortening: false,
    isShortened: false,
}

export default function link(state=initialState, action) {
    switch (action.type) {
        case SHORTEN_LINK_REQUEST:
            return {
                ...state,
                isShortening: true,
                isShortened: false,
                full_link: action.full_link
            }
        case SHORTEN_LINK_SUCCESS:
            return {
                ...state,
                isShortening: false,
                isShortened: true,
                full_link: action.full_link,
                short_link: action.short_link
            }
        case SHORTEN_LINK_ERROR:
            return {
                ...state,
                isShortening: false,
                isShortened: false,
                errorMessage: action.message
            }
        default:
            return state
    }
}