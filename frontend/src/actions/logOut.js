export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isDisconnecting: true,
        isDisconnected: false,
    }
}

function successLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isDisconnecting: false,
        isDisconnected: true,
        isValid: false,
    }
}

export const userLogout = () => {
    return dispatch => {
        dispatch(requestLogout())
        localStorage.removeItem('token_access')
        localStorage.removeItem('token_refresh')
        dispatch(successLogout())
    }
}