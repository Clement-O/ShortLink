// Local import
import {USER_LINK_REQUEST, USER_LINK_SUCCESS, USER_LINK_ERROR} from "../actions/getUserLink";

const initialState = {
    isFetching: false,
    isFetched: false
}

export default function getUserLink(state=initialState, action) {
    switch (action.type) {
        case USER_LINK_REQUEST:
            return {
                ...state,
                isFetching: true,
                isFetched: false
            }
        case USER_LINK_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                user_links: action.user_links
            }
        case USER_LINK_ERROR:
            return {
                ...state,
                isFetching: false,
                isFetched: false,
                errorMessage: action.message
            }
        default:
            return state
    }
}