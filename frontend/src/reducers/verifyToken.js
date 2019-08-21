// Local import
import {VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAILURE} from "../actions/verifyToken";

const initialState = {
    isValidating: undefined,
    isValidated: undefined,
}

export default function verifyToken(state=initialState, action) {
    switch (action.type) {
        case VERIFY_TOKEN_REQUEST:
            return {...state,
                isValidating: true,
                isValidated: false,
            }
        case VERIFY_TOKEN_SUCCESS:
            return {
                ...state,
                isValidating: false,
                isValidated: true,
            }
        case VERIFY_TOKEN_FAILURE:
            return {
                ...state,
                isValidating: false,
                isValidated: false,
                errorMessage: action.message
            }
        default:
            return state
    }
}