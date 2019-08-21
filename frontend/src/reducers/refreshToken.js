import {REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE} from "../actions/refreshToken";

export default function refreshToken(state={}, action) {
    switch (action.type) {
        case REFRESH_TOKEN_REQUEST:
            return {...state,
                isRefreshing: true,
                isRefreshed: false,
            }
        case REFRESH_TOKEN_SUCCESS:
            return {
                ...state,
                isRefreshing: false,
                isRefreshed: true,
            }
        case REFRESH_TOKEN_FAILURE:
            return {
                ...state,
                isRefreshing: false,
                isRefreshed: false,
                errorMessage: action.message
            }
        default:
            return state
    }
}