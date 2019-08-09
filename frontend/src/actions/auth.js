export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(tokens) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token_access: tokens.access
    }
}

function errorLogin(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: false,
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
    }
}

export const userLogin = ({username, password}) => {
    const config = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    }
    return dispatch => {
        dispatch(requestLogin({username, password}))

        return fetch('/token-access/', config)
            .then(res => res.json().then(tokens => ({tokens, res})))
            .then(({tokens, res}) => {
                if (!res.ok) {
                    dispatch(errorLogin(tokens.message))
                    return Promise.reject(tokens)
                } else {
                    localStorage.setItem('token_access', tokens.access)
                    localStorage.setItem('token_refresh', tokens.refresh)
                    dispatch(receiveLogin(tokens))
                }
            }).catch(err => console.log("Error: ", err))
    }
}

export const userLogout = () => {
    return dispatch => {
        dispatch(requestLogout())
        localStorage.removeItem('token_access')
        localStorage.removeItem('token_refresh')
        dispatch(receiveLogout())
    }
}