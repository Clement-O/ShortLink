export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST'
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS'
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE'

function refreshRequest() {
    return {
        type: REFRESH_TOKEN_REQUEST,
        isRefreshing: true,
        isRefreshed: false,
    }
}

function refreshSuccess () {
    return {
        type: REFRESH_TOKEN_SUCCESS,
        isRefreshing: false,
        isRefreshed: true,
    }
}

function refreshFailure (message) {
    return {
        type: REFRESH_TOKEN_FAILURE,
        isRefreshing: false,
        isRefreshed: false,
        message
    }
}

export const refreshToken = (refresh) => {
    const config = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({refresh})
    }
    return dispatch => {
        dispatch(refreshRequest())

        return fetch('/token-refresh/', config)
            .then(res => res.json().then(token => ({token, res})))
            .then(({token, res}) => {
                if (!res.ok) {
                    dispatch(refreshFailure(token.detail))
                    return Promise.reject(token)
                } else {
                    localStorage.setItem('token_access', token.access)
                    dispatch(refreshSuccess())
                }
            }).catch(err => console.log("Error: ", err))
    }
}